import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
const root = new URL('../../pocketPatrol/', import.meta.url);
const html = readFileSync(new URL('index.html',root),'utf8');
const analytics = readFileSync(new URL('analytics.js',root),'utf8');
const site = readFileSync(new URL('site.js',root),'utf8');
const consentKey='pocketpatrol.analytics-consent.v1';
const disabledKey='ga-disable-G-01XQP2LLWX';
function harness(saved=null){
  let now=Date.UTC(2026,10,7);
  const events={}; const scripts=[]; let reloads=0;
  const node=(dataset={})=>({dataset,hidden:true,handlers:{},setAttribute(){},focus(){},remove(){},addEventListener(type,fn){this.handlers[type]=fn;}});
  const settings=node(),allow=node({cookieChoice:'granted'}),deny=node({cookieChoice:'denied'}),close=node(),banner=node(),title=node();
  const links=[node({store:'google_play',placement:'intro'}),node({store:'google_play',placement:'bottom'})];
  const map=new Map(saved?[[consentKey,JSON.stringify({value:saved,expires:now+10000})]]:[]);
  const storage=()=>({getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v),removeItem:k=>map.delete(k)});
  const document={documentElement:{lang:'ja'},referrer:'',cookie:'',head:{appendChild:s=>scripts.push(s)},createElement:()=>node(),getElementById:id=>({'cookie-close':close,'cookie-banner':banner,'cookie-title':title}[id]??null),querySelector:()=>settings,querySelectorAll:selector=>({'a[data-store]':links,'[data-cookie-settings]':[settings],'[data-cookie-choice]':[deny,allow]}[selector]??[]),addEventListener:(type,fn)=>events[type]=fn};
  const window={localStorage:storage(),sessionStorage:{getItem(){return null},setItem(){},removeItem(){}}};
  class Clock extends Date{static now(){return now}}
  runInNewContext(analytics,{window,document,location:{origin:'https://example.test',pathname:'/policy/pocketPatrol/',reload(){reloads++}},Date:Clock,URL,setTimeout(){return 1},clearTimeout(){},addEventListener(){},sessionStorage:window.sessionStorage});
  events.DOMContentLoaded();
  return {window,scripts,links,allow,deny,expire:()=>now+=20000,click:i=>links[i].handlers.click(),grant:()=>allow.handlers.click(),refuse:()=>deny.handlers.click(),events:()=>Array.from(window.dataLayer??[]).filter(x=>x[0]==='event'),reloads:()=>reloads};
}
test('Verified Android CTA exists twice and works without JavaScript',()=>{
 const links=[...html.matchAll(/<a[^>]+data-store="google_play"[^>]*>/g)].map(x=>x[0]);
 assert.equal(links.length,2);
 for(const link of links){assert.match(link,/href="https:\/\/play.google.com\/store\/apps\/details\?id=jp.kouheielimilab.pocketpatrol"/);assert.match(link,/rel="noopener noreferrer"/);}
 assert.equal([...html.matchAll(/data-store="app_store"/g)].length,2);
 assert.equal([...html.matchAll(/href="https:\/\/apps.apple.com\/app\/id6824158539"/g)].length,2);
 assert.match(html,/data-placement="intro"/);assert.match(html,/data-placement="bottom"/);
});
test('No analytics or clicks before permission or after denial',()=>{
 const h=harness();h.click(0);assert.equal(h.scripts.length,0);assert.equal(h.events().length,0);assert.equal(h.window[disabledKey],true);
 h.refuse();h.click(1);assert.equal(h.scripts.length,0);assert.equal(h.events().length,0);
});
test('Explicit permission enables fixed store_click labels once per click',()=>{
 const h=harness();h.grant();h.click(0);h.click(1);
 assert.equal(h.scripts.length,1);assert.equal(h.events().length,2);
 assert.deepEqual(JSON.parse(JSON.stringify(h.events()[0][2])),{game_id:'pocket_patrol',store:'google_play',placement:'intro',site_language:'ja',page_path:'/policy/pocketPatrol/',transport_type:'beacon'});
 assert.equal(h.events()[1][2].placement,'bottom');
 h.links[0].dataset.store='app_store';h.click(0);assert.equal(h.events().length,3);assert.equal(h.events()[2][2].store,'app_store');
 h.links[0].dataset.store='untrusted';h.click(0);assert.equal(h.events().length,3);
});
test('Returning grants expire and withdrawals stop clicks',()=>{
 const h=harness('granted');h.click(0);assert.equal(h.events().length,1);h.expire();h.click(0);assert.equal(h.events().length,1);
 const revoked=harness('granted');revoked.refuse();revoked.click(0);assert.equal(revoked.events().length,0);assert.equal(revoked.window[disabledKey],true);assert.equal(revoked.reloads(),1);
 const denied=harness('denied');denied.click(0);assert.equal(denied.events().length,0);assert.equal(denied.scripts.length,0);
});
test('Both locales include download labels and metadata without changing privacy metadata behavior',()=>{
 for(const key of ['home.metaTitle','home.metaDescription','download.androidLabel','download.action','download.title','download.note'])assert.ok(site.includes('"'+key+'"'));
 assert.match(html,/property="og:description"/);assert.match(html,/name="viewport"/);assert.doesNotMatch(html,/noindex/);
});
