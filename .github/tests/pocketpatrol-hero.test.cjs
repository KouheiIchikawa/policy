const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const code = fs.readFileSync(path.join(__dirname, '../../pocketPatrol/hero.js'), 'utf8');
function setup(reduced = false) {
 const make = () => ({ attrs: {}, handlers: {}, hidden: true, inert: false, textContent: '', classList: { toggle() {} }, setAttribute(k,v){this.attrs[k]=v;}, removeAttribute(k){delete this.attrs[k];}, addEventListener(k,v){this.handlers[k]=v;} });
 const slides=Array.from({length:4},()=>Object.assign(make(),{querySelector:()=>({alt:'',complete:true,naturalWidth:1536})})), dots=Array.from({length:4},make), controls=make(), prev=make(), next=make(), pause=make(), status=make();
 const root=make(); Object.assign(root,{contains:()=>false,querySelector:s=>({'.kv-controls':controls,'.kv-prev':prev,'.kv-next':next,'.kv-pause':pause,'.kv-status':status}[s]),querySelectorAll:s=>s==='.kv-slide'?slides:dots});
 const doc={documentElement:{lang:'ja'},hidden:false,handlers:{},querySelector:()=>root,addEventListener(k,v){this.handlers[k]=v;}};
 const motion={matches:reduced,addEventListener(k,v){this.change=v;}};
 let timer=null; const ctx={document:doc,window:{matchMedia:()=>motion},setTimeout:fn=>{timer=fn;return 1;},clearTimeout:()=>{timer=null;},MutationObserver:class{constructor(fn){this.fn=fn;}observe(){}}};vm.runInNewContext(code,ctx);
 return {slides,dots,controls,prev,next,pause,status,root,doc,motion,get timer(){return timer;}};
}
test('four slides and four always-present logos',()=>{const html=fs.readFileSync(path.join(__dirname,'../../pocketPatrol/index.html'),'utf8');assert.equal((html.match(/class="kv-slide/g)||[]).length,4);assert.equal((html.match(/class="kv-logo"/g)||[]).length,3);assert.ok(html.includes('assets/hero.webp'));assert.ok(html.includes('prefers-reduced-motion')===false);});
test('autoplay advances after scheduling and manual selection pauses',()=>{const s=setup();assert.ok(s.timer);s.timer();assert.equal(s.dots[1].attrs['aria-current'],'true');s.dots[3].handlers.click();assert.equal(s.slides[3].inert,false);assert.equal(s.slides[0].inert,true);assert.equal(s.timer,null);assert.match(s.status.textContent,/4/);});
test('reduced motion starts paused and manual switching works',()=>{const s=setup(true);assert.equal(s.timer,null);s.next.handlers.click();assert.equal(s.dots[1].attrs['aria-current'],'true');});
test('hover and hidden tabs suspend rotation',()=>{const s=setup();s.root.handlers.mouseenter();assert.equal(s.timer,null);s.root.handlers.mouseleave();assert.ok(s.timer);s.doc.hidden=true;s.doc.handlers.visibilitychange();assert.equal(s.timer,null);});
test('keyboard end/home navigate and pause',()=>{const s=setup();s.controls.handlers.keydown({key:'End',preventDefault(){}});assert.equal(s.dots[3].attrs['aria-current'],'true');s.controls.handlers.keydown({key:'Home',preventDefault(){}});assert.equal(s.dots[0].attrs['aria-current'],'true');assert.equal(s.timer,null);});
test('motion setting change stops existing animation',()=>{const s=setup();s.motion.matches=true;s.motion.change();assert.equal(s.timer,null);});

test('explicit play can restart after focus paused the slideshow',()=>{const s=setup();s.root.handlers.focusin();assert.equal(s.timer,null);s.pause.handlers.click();assert.ok(s.timer);});

test('unloaded image keeps the existing visual visible',()=>{const s=setup();s.slides[1].querySelector=()=>({complete:false,naturalWidth:0,addEventListener(){}});s.next.handlers.click();assert.equal(s.slides[0].inert,false);assert.equal(s.dots[1].attrs['aria-current'],undefined);assert.equal(s.timer,null);});
