const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const code = fs.readFileSync(path.join(__dirname, '../../pocketPatrol/hero.js'), 'utf8');
function setup(reduced=false) {
 const make=()=>({attrs:{},handlers:{},hidden:true,inert:false,textContent:'',classList:{toggle(){}},setAttribute(k,v){this.attrs[k]=v;},getAttribute(k){return this.attrs[k];},addEventListener(k,v){this.handlers[k]=v;}});
 const slides=Array.from({length:4},()=>Object.assign(make(),{querySelector:()=>({alt:'',complete:true,naturalWidth:1536})}));
 const pause=make(),root=make();Object.assign(root,{querySelector:()=>pause,querySelectorAll:()=>slides});
 const doc={documentElement:{lang:'ja'},hidden:false,handlers:{},querySelector:()=>root,addEventListener(k,v){this.handlers[k]=v;}};
 const motion={matches:reduced,addEventListener(k,v){this.change=v;}};let timer=null;
 vm.runInNewContext(code,{document:doc,window:{matchMedia:()=>motion},setTimeout:fn=>{timer=fn;return 1;},clearTimeout:()=>{timer=null;},MutationObserver:class{observe(){}}});
 return {slides,pause,root,doc,motion,get timer(){return timer;}};
}
test('all four slides remain; no manual switching UI exists',()=>{const h=fs.readFileSync(path.join(__dirname,'../../pocketPatrol/index.html'),'utf8');assert.equal((h.match(/class="kv-slide/g)||[]).length,4);assert.equal((h.match(/class="kv-logo"/g)||[]).length,3);for(const x of ['kv-controls','kv-dots','kv-prev','kv-next','data-kv='])assert.ok(!h.includes(x));});
test('autoplay cycles all four slides repeatedly',()=>{const s=setup();for(let i=1;i<=8;i++){assert.ok(s.timer);s.timer();assert.equal(s.slides[i%4].attrs['aria-hidden'],'false');}});
test('pointer and focus never silently stop automatic rotation',()=>{const s=setup();for(const k of ['mouseenter','mouseleave','focusin','focusout'])assert.equal(s.root.handlers[k],undefined);assert.ok(s.timer);});
test('hidden tabs suspend then resume',()=>{const s=setup();s.doc.hidden=true;s.doc.handlers.visibilitychange();assert.equal(s.timer,null);s.doc.hidden=false;s.doc.handlers.visibilitychange();assert.ok(s.timer);});
test('reduced motion starts paused',()=>{const s=setup(true);assert.equal(s.timer,null);});
test('motion setting change stops rotation',()=>{const s=setup();s.motion.matches=true;s.motion.change();assert.equal(s.timer,null);});
test('keyboard-accessible pause is reliable and resumes explicitly',()=>{const s=setup();s.pause.handlers.click();assert.equal(s.timer,null);s.pause.handlers.click();assert.ok(s.timer);s.timer();assert.equal(s.slides[1].attrs['aria-hidden'],'false');});
test('unloaded image never blanks the active slide',()=>{const s=setup();s.slides[1].querySelector=()=>({complete:false,naturalWidth:0});s.timer();assert.equal(s.slides[0].inert,false);assert.ok(s.timer);});
