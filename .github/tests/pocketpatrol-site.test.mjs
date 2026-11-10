import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
const root = new URL('../../pocketPatrol/', import.meta.url);
const html = readFileSync(new URL('index.html',root),'utf8');
const analytics = readFileSync(new URL('analytics.js',root),'utf8');
const site = readFileSync(new URL('site.js',root),'utf8');
const consentKey='pocketpatrol.analytics-consent.v1';
const disabledKey='ga-disable-G-01XQP2LLWX';
function harness(saved=null, search=""){
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
  runInNewContext(analytics,{window,document,location:{origin:'https://example.test',pathname:'/policy/pocketPatrol/',search,reload(){reloads++}},Date:Clock,URL,URLSearchParams,setTimeout(){return 1},clearTimeout(){},addEventListener(){},sessionStorage:window.sessionStorage});
  events.DOMContentLoaded();
  return {window,scripts,links,allow,deny,expire:()=>now+=20000,click:i=>links[i].handlers.click(),grant:()=>allow.handlers.click(),refuse:()=>deny.handlers.click(),events:()=>Array.from(window.dataLayer??[]).filter(x=>x[0]==='event'),reloads:()=>reloads};
}
test('One top store CTA per platform works without JavaScript',()=>{
 const links=[...html.matchAll(/<a[^>]+data-store="google_play"[^>]*>/g)].map(x=>x[0]);
 assert.equal(links.length,1);
 for(const link of links){assert.match(link,/href="https:\/\/play.google.com\/store\/apps\/details\?id=jp.kouheielimilab.pocketpatrol"/);assert.match(link,/rel="noopener noreferrer"/);}
 assert.equal([...html.matchAll(/data-store="app_store"/g)].length,1);
 assert.equal([...html.matchAll(/href="https:\/\/apps.apple.com\/app\/id6824158539"/g)].length,1);
 assert.match(html,/data-placement="intro"/);assert.doesNotMatch(html,/data-placement="bottom"/);
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
 // Exercise campaign attribution through the real consent/config path.
 for (const [query, expected] of [
  ['?utm_source=x&utm_medium=social&utm_campaign=pp_20261108_gameplay_01&utm_content=video_a', {campaign_source:'x',campaign_medium:'social',campaign_name:'pp_20261108_gameplay_01',campaign_content:'video_a'}],
  ['?utm_source=youtube&utm_medium=video&utm_campaign=pp_20261201_release_02', {campaign_source:'youtube',campaign_medium:'video',campaign_name:'pp_20261201_release_02'}],
  ['?utm_source=x&utm_source=youtube&utm_medium=social&utm_campaign=pp_20261108_gameplay_01', {}],
  ['?utm_source=x&utm_medium=social&utm_campaign=pp_20260230_gameplay_01', {}],
  ['?utm_source=private-email&utm_medium=social&utm_campaign=personal-data', {}]
 ]) {
  const campaign=harness(null,query);
  assert.equal(campaign.scripts.length,0);
  campaign.grant();
  const config=Array.from(campaign.window.dataLayer).find(entry=>entry[0]==='config')[2];
  const actual=Object.fromEntries(Object.entries(config).filter(([key])=>key.startsWith('campaign_')));
  assert.deepEqual(actual,expected);
  assert.equal(config.page_location,'https://example.test/policy/pocketPatrol/');
 }

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

const pages=['index.html','world.html','minigames.html','privacy-policy.html','residents.html','interview.html'];
const translations=JSON.parse(site.match(/const messages = (\{[\s\S]*?\n\});/)[1]);
test('Every page has bilingual copy, one main heading and working local assets',()=>{
 for(const name of pages){
  const source=readFileSync(new URL(name,root),'utf8');
  assert.equal((source.match(/<h1[\s>]/g)||[]).length,1,name);
  for(const [,key]of source.matchAll(/data-i18n="([^"]+)"/g)){
   assert.ok(translations[key]?.ja,key+' Japanese');assert.ok(translations[key]?.en,key+' English');
  }
  for(const [,target]of source.matchAll(/(?:src|href)="([^"]+)"/g)){
   if(/^(?:https?:|#|mailto:)/.test(target))continue;
   const path=target.split(/[?#]/)[0];if(!path)continue;
   assert.ok(readFileSync(new URL(path.endsWith('/')?path+'index.html':path,root)).length,name+' '+path);
  }
 }
});
test('Cast uses the five verified people, not enemy model names',()=>{
 for(const id of ['nova','sera','rin','miu','kai']) assert.match(html,new RegExp('assets/characters/'+id+'\\.webp'));
 assert.equal((html.match(/class="character-card /g)||[]).length,5);
});
test('World timeline preserves only the source era and opening sequence',()=>{
 const world=readFileSync(new URL('world.html',root),'utf8');
 assert.equal((world.match(/class="timeline-stamp"/g)||[]).length,7);
 assert.match(world,/20XX/);assert.doesNotMatch(world,/20[0-9]{2}年/);
 assert.match(world,/meteor-core\.webp/);assert.match(world,/three-cores\.webp/);
});
test('Four actual mini-games are explained without claiming a mobile runner',()=>{
 const guide=readFileSync(new URL('minigames.html',root),'utf8');
 for(const id of ['breakout','pinball','slot','bingo'])assert.match(guide,new RegExp('id="'+id+'"'));
 assert.doesNotMatch(guide,/id="runner"/);
});
test('Privacy keeps legacy and analytics disclosures inside usable native details',()=>{
 const policy=readFileSync(new URL('privacy-policy.html',root),'utf8');
 assert.equal((policy.match(/<details class="policy-details">/g)||[]).length,2);
 for(const key of ['policy.services.body','policy.services.sdk','policy.web.body','policy.web.choice']){
   assert.match(policy,new RegExp('data-i18n="'+key.replaceAll('.','\\.')+'"'));
 }
 assert.match(translations['policy.services.body'].en,/Older versions use Firebase/);
 assert.match(translations['policy.web.body'].en,/Google Analytics 4/);
 assert.match(translations['policy.web.choice'].en,/180 days/);
});
test('Store badge images reuse the supplied common assets and preserve click attributes',()=>{
 assert.equal((html.match(/common\/appstore_badge\.svg/g)||[]).length,1);
 assert.equal((html.match(/class="store-badge store-badge-play"/g)||[]).length,1);
 assert.equal(translations['badge.play'].ja,'../common/Google_Play_Badge_JA.svg');
 assert.equal(translations['badge.play'].en,'../common/Google_Play_Badge_EN.png');
});

test('Arcade guides use the new chibi illustration without replacing the original cast art',()=>{
 const guide=readFileSync(new URL('minigames.html',root),'utf8');
 assert.match(guide,/assets\/chibi\/nova-sera-guide\.png/);
 assert.equal((guide.match(/class="chibi-avatar /g)||[]).length,11);
 assert.doesNotMatch(guide,/assets\/characters\/(?:nova|sera)-portrait/);
 assert.match(html,/class="chibi-stage chibi-preview"/);
 assert.match(html,/assets\/characters\/nova\.webp/);
});

test('Mini-game tabs support deep links, arrow keys, Home/End and one visible panel',()=>{
 const ids=['breakout','pinball','slot','bingo'];
 const events={}; let focused=''; let localeRefreshes=0;
 const panels=Object.fromEntries(ids.map(id=>[id,{id,hidden:false,attrs:{},setAttribute(k,v){this.attrs[k]=v;}}]));
 const tabs=ids.map(id=>({hash:'#'+id,attrs:{},events:{},setAttribute(k,v){this.attrs[k]=v;},addEventListener(k,f){this.events[k]=f;},focus(){focused=id;}}));
 const list={attrs:{},setAttribute(k,v){this.attrs[k]=v;},querySelectorAll(){return tabs;}};
 const location={pathname:'/policy/pocketPatrol/minigames.html',search:'?lang=ja',hash:'#pinball'};
 const context={document:{querySelector(){return list;},getElementById(id){return panels[id];}},location,
  history:{replaceState(a,b,url){location.hash=url.slice(url.indexOf('#'));}},
  addEventListener(k,f){events[k]=f;},requestedLocale(){return 'ja';},applyLocale(){localeRefreshes++;}};
 const code=site.slice(site.indexOf('  function setupArcadeTabs()'),site.indexOf('  function setupBackToTop()'));
 runInNewContext(code+'\nsetupArcadeTabs();',context);
 const visible=()=>ids.filter(id=>!panels[id].hidden);
 assert.deepEqual(visible(),['pinball']);assert.equal(list.attrs.role,'tablist');
 tabs[1].events.keydown({key:'ArrowRight',preventDefault(){}});
 assert.deepEqual(visible(),['slot']);assert.equal(focused,'slot');assert.equal(location.hash,'#slot');
 tabs[2].events.keydown({key:'End',preventDefault(){}});assert.deepEqual(visible(),['bingo']);
 tabs[3].events.keydown({key:'Home',preventDefault(){}});assert.deepEqual(visible(),['breakout']);
 tabs[0].events.keydown({key:'ArrowLeft',preventDefault(){}});assert.deepEqual(visible(),['bingo']);
 assert.equal(tabs.filter(t=>t.tabIndex===0).length,1);assert.ok(localeRefreshes>=4);
 location.hash='#pinball';events.popstate();assert.deepEqual(visible(),['pinball']);
 const guide=readFileSync(new URL('minigames.html',root),'utf8');assert.equal((guide.match(/data-game-tabs/g)||[]).length,1);
});

test('Back-to-top respects reduced motion, restores focus and avoids the consent banner',()=>{
 let button;let observer;let focused=false;let scroll;
 const events={};const banner={hidden:true};const brand={focus(){focused=true;}};
 const context={scrollY:700,document:{createElement(){return {dataset:{},events:{},addEventListener(k,f){this.events[k]=f;}};},
  body:{appendChild(node){button=node;}},getElementById(){return banner;},querySelector(){return brand;}},
  addEventListener(k,f){events[k]=f;},MutationObserver:class{constructor(f){observer=f;}observe(){}},
  matchMedia(){return {matches:true};},scrollTo(args){scroll=args;}};
 const code=site.slice(site.indexOf('  function setupBackToTop()'),site.indexOf("  document.addEventListener('DOMContentLoaded'"));
 runInNewContext(code+'\nsetupBackToTop();',context);
 assert.equal(button.hidden,false);banner.hidden=false;observer();assert.equal(button.hidden,true);
 banner.hidden=true;observer();button.events.click();assert.equal(scroll.top,0);assert.equal(scroll.behavior,'auto');assert.equal(focused,true);
 context.scrollY=0;events.scroll();assert.equal(button.hidden,true);
});

test('Privacy contact wording links directly to the existing contact destination',()=>{
 for(const language of ['ja','en']){
  assert.match(translations['policy.retention.body'][language],/<a href="https:\/\/x\.com\/sio_sio_bull"/);
  assert.doesNotMatch(translations['policy.retention.body'][language],/footer|フッター/);
 }
});

const catalogSource=readFileSync(new URL('residents-data.js',root),'utf8');
const catalog=JSON.parse(catalogSource.replace(/^window\.POCKET_RESIDENTS = /,'').replace(/;\s*$/,''));
test('Enemy catalog contains only six verified Stage 1 characters and matching illustrations',()=>{
 const roster=['brawler','drone','elder','fighter','sorceress','white-rider'];
 assert.equal(catalog.characters.length,6);assert.equal(catalog.count,6);
 assert.deepEqual(catalog.characters.map(c=>c.base).sort(),roster);
 assert.deepEqual(readdirSync(new URL('assets/enemies/',root)).sort(),roster.map(base=>base+'.webp'));
 for(const c of catalog.characters){
  for(const field of ['name','speciesName','classification','role','personality','belief','payUse']){
   assert.ok(c[field].ja,c.base+' '+field+' ja');assert.ok(c[field].en,c.base+' '+field+' en');
  }
  assert.equal(c.image,'assets/enemies/'+c.base+'.webp');assert.ok(readFileSync(new URL(c.image,root)).length>0);
 }
 assert.doesNotMatch(catalogSource,/app\.notion\.com|sourceBlobSha|sharedModelLoreReference|libfile_|C:\\\\/);
});

test('First-stage salaries distinguish base pay from unspecified take-home pay',()=>{
 const get=base=>catalog.characters.find(c=>c.base===base);
 assert.equal(get('drone').salary.gross,1200);assert.equal(get('drone').salary.disposable,180);
 assert.equal(get('brawler').salary.gross,4200);assert.equal(get('brawler').salary.disposable,null);
 assert.equal(get('sorceress').salary.gross,6800);assert.equal(get('sorceress').salary.disposable,null);
 for(const c of catalog.characters)for(const key of ['gross','disposable','ownerRevenue','unpaidClaim']){
  const n=c.salary[key];assert.ok(n===null||(Number.isFinite(n)&&n>=0),c.base+' '+key);
 }
});

test('Shared boss models do not lend unverified boss dimensions to ordinary individuals',()=>{
 const shared=['white-rider'];
 for(const base of shared)assert.equal(catalog.characters.find(c=>c.base===base).canonicalDimensions,undefined,base);
 assert.equal(catalog.characters.filter(c=>c.canonicalDimensions).length,5);
 assert.deepEqual(catalog.characters.find(c=>c.base==='brawler').canonicalDimensions,{lengthM:2.65,weightKg:480});
 assert.deepEqual(catalog.characters.find(c=>c.base==='sorceress').canonicalDimensions,{lengthM:1.76,weightKg:58});
});

test('Enemy page has a dedicated canonical URL and one character selector',()=>{
 const page=readFileSync(new URL('residents.html',root),'utf8');
 assert.match(page,/<link rel="canonical" href="https:\/\/kouheiichikawa.github.io\/policy\/pocketPatrol\/residents.html">/);
 assert.equal((page.match(/id="resident-select"/g)||[]).length,1);
 assert.match(page,/<noscript>/);assert.match(site,/lift-shell/);assert.match(site,/lift-chevron/);
 const fallback=page.match(/<noscript>([\s\S]*?)<\/noscript>/)[1];
 assert.equal((fallback.match(/<article>/g)||[]).length,6);
 assert.match(fallback,/Pursuer Hound/);assert.match(fallback,/Collector Veil/);
 assert.doesNotMatch(fallback,/Memora|Basilisk|Tact|26/);
});

test('Catalog renders each of six profiles, optional pay fields and both locales without missing nodes',()=>{
 const page=readFileSync(new URL('residents.html',root),'utf8');
 const source=readFileSync(new URL('residents.js',root),'utf8');
 const make=()=>({textContent:'',hidden:false,children:[],handlers:{},append(...nodes){this.children.push(...nodes);},replaceChildren(...nodes){this.children=nodes;},addEventListener(event,fn){this.handlers[event]=fn;}});
 const nodes=Object.fromEntries([...page.matchAll(/id="([^"]+)"/g)].map(([,id])=>[id,make()]));
 const steps=[Object.assign(make(),{dataset:{residentStep:'-1'}}),Object.assign(make(),{dataset:{residentStep:'1'}})];
 const localeLinks=['ja','en'].map(lang=>({url:'http://example.test/residents.html?lang='+lang+'#brawler',get href(){return this.url;},set href(value){this.url=new URL(value,'http://example.test').href;}}));
 const events={};let refresh;
 const location={pathname:'/residents.html',search:'?lang=ja',hash:'#brawler'};
 const document={documentElement:{lang:'ja'},getElementById:id=>nodes[id],createElement:make,querySelectorAll:selector=>selector==='[data-locale]'?localeLinks:steps,addEventListener:(event,fn)=>events[event]=fn};
 const context={window:{POCKET_RESIDENTS:catalog},document,location,URL,Intl,addEventListener:(event,fn)=>events[event]=fn,history:{replaceState(a,b,url){location.hash=new URL(url,'http://example.test').hash;}},MutationObserver:class{constructor(fn){refresh=fn;}observe(){}}};
 runInNewContext(source,context);events.DOMContentLoaded();
 assert.equal(nodes['resident-name'].textContent,'追跡機ハウンド');
 assert.equal(nodes['salary-values'].children.length,1);assert.equal(nodes['resident-select'].children.length,6);
 for(const character of catalog.characters){
  nodes['resident-select'].value=character.base;nodes['resident-select'].handlers.change();
  assert.equal(nodes['resident-name'].textContent,character.name.ja);assert.equal(nodes['resident-image'].src,character.image);
  assert.equal(location.hash,'#'+character.base);
 }
 steps[1].handlers.click();assert.equal(nodes['resident-name'].textContent,'ツギ');
 document.documentElement.lang='en';refresh();assert.equal(nodes['resident-name'].textContent,'Tsugi');
 location.hash='#sorceress';events.popstate();assert.equal(nodes['resident-name'].textContent,'Collector Veil');
 assert.equal(nodes['salary-values'].children.length,1);
 assert.doesNotMatch(JSON.stringify(catalog),/準備中|In preparation/);
});

test('Public enemy and arcade copy has no stage or production disclosures',()=>{
 const copy=['index.html','residents.html','residents-data.js','minigames.html','site.js'].map(name=>readFileSync(new URL(name,root),'utf8')).join('\n');
 assert.doesNotMatch(copy,/Stage 1|STAGE 01|first stage|1面|第3・第6|additional worldbuilding|追加設定|追加の世界設定|in-game character illustration|New illustration based on the in-game model/);
});

test('Every arcade tab includes its actual gameplay screenshot',()=>{
 const page=readFileSync(new URL('minigames.html',root),'utf8');
 for(const kind of ['breakout','pinball','slot','bingo']){assert.ok(page.includes('assets/arcade/'+kind+'.webp'));assert.ok(readFileSync(new URL('assets/arcade/'+kind+'.webp',root)).length>10000);}
});
