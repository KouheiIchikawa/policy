import {useRef,useState} from 'react'
import './cube3D.css'

const faceNames={ja:['正面','裏面','上面','下面','左面','右面'],en:['Front','Back','Top','Bottom','Left','Right']}
const directions=['front','back','top','bottom','left','right']
function sticker(face,x,y,z){
 if(face===0&&z===1)return (1-y)*3+x+1
 if(face===1&&z===-1)return (1-y)*3+1-x
 if(face===2&&y===1)return (z+1)*3+x+1
 if(face===3&&y===-1)return (1-z)*3+x+1
 if(face===4&&x===-1)return (1-y)*3+z+1
 if(face===5&&x===1)return (1-y)*3+1-z
 return -1
}
const pieces=[];for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++)pieces.push({x,y,z})
export default function Cube3D({state,selected,onSelect,onMove,animation,names,ja}){
 const [mode,setMode]=useState('view'),[view,setView]=useState({x:-22,y:-28}),[zoom,setZoom]=useState(1),drag=useRef(null)
 function chooseMode(next){setMode(next);drag.current=null;if(next==='turn')setView({x:-18,y:-24})}
 function down(e){if(e.button!==0||animation||drag.current)return;const tile=e.target.closest('[data-face]');if(mode==='turn'&&(!tile||tile.dataset.face!=='0'))return;const index=tile?Number(tile.dataset.index):selected;if(mode==='turn')onSelect(index);drag.current={id:e.pointerId,x:e.clientX,y:e.clientY,view:{...view},index};e.currentTarget.setPointerCapture(e.pointerId)}
 function moving(e){const d=drag.current;if(!d||d.id!==e.pointerId||mode!=='view')return;setView({x:Math.max(-85,Math.min(85,d.view.x-(e.clientY-d.y)*.45)),y:d.view.y+(e.clientX-d.x)*.45})}
 function up(e){const d=drag.current;if(!d||d.id!==e.pointerId)return;drag.current=null;if(mode==='view')return;const dx=e.clientX-d.x,dy=e.clientY-d.y;if(Math.max(Math.abs(dx),Math.abs(dy))<18)return;const row=Math.abs(dx)>Math.abs(dy);onMove(row?'row':'col',row?(dx>0?1:-1):(dy>0?1:-1),row?Math.floor(d.index/3):d.index%3)}
 function key(e,index){if(animation||mode!=='turn')return;const map={ArrowLeft:['row',-1],ArrowRight:['row',1],ArrowUp:['col',-1],ArrowDown:['col',1]};if(!map[e.key])return;e.preventDefault();const [kind,delta]=map[e.key];onSelect(index);onMove(kind,delta,kind==='row'?Math.floor(index/3):index%3)}
 return <div className="cube3d-panel">
  <div className="cg-tabs" role="group" aria-label={ja?'キューブの操作モード':'Cube interaction mode'}><button aria-pressed={mode==='view'} onClick={()=>chooseMode('view')}>{ja?'見回す':'Look around'}</button><button aria-pressed={mode==='turn'} onClick={()=>chooseMode('turn')}>{ja?'行・列を回す':'Turn rows / columns'}</button></div>
  <p className="cube3d-help" aria-live="polite">{mode==='view'?(ja?'ドラッグで上下左右から見回せます。色の状態や手数は変わりません。':'Drag to orbit the cube. Looking around does not change colors or count as a move.'):(ja?'正面のマスを横にドラッグすると行、縦なら列が回ります。':'Drag a front sticker sideways to turn its row, or vertically to turn its column.')}</p>
  <div className={`cube3d-stage cube3d-${mode}`} role="group" aria-label={ja?'マウスで操作できる3Dキューブ':'Interactive 3D cube'} onPointerDown={down} onPointerMove={moving} onPointerUp={up} onPointerCancel={()=>{drag.current=null}} onLostPointerCapture={()=>{drag.current=null}}>
   <div className="cube3d-model" style={{transform:`scale(${zoom}) rotateX(${view.x}deg) rotateY(${view.y}deg)`}}>
    {pieces.map(({x,y,z})=>{const active=animation&&(animation.kind==='row'?y===1-animation.index:x===animation.index-1);return <div key={`${x},${y},${z}`} className={`cube3d-pivot ${active?'cube3d-spinning':''}`} style={active?{'--turn-axis':animation.kind==='row'?'0,1,0':'1,0,0','--turn-angle':`${(animation.kind==='row'?animation.delta:-animation.delta)*90}deg`}:undefined}><div className="cube3d-cubie" style={{transform:`translate3d(calc(${x} * var(--unit)),calc(${-y} * var(--unit)),calc(${z} * var(--unit)))`}}>{directions.map((direction,face)=>{const index=sticker(face,x,y,z),color=index<0?null:state[face][index],interactive=face===0&&index>=0&&mode==='turn';return <div key={face} className={`cube3d-face cube3d-face-${direction}`}>
     {color?<button type="button" data-face={face} data-index={index} tabIndex={interactive?0:-1} disabled={!!animation} className={`cube3d-sticker cube3d-color-${color} ${face===0&&selected===index&&mode==='turn'?'cube3d-selected':''}`} aria-label={`${faceNames[ja?'ja':'en'][face]} ${Math.floor(index/3)+1},${index%3+1}: ${names[color]}`} onFocus={()=>{if(interactive)onSelect(index)}} onClick={()=>{if(interactive)onSelect(index)}} onKeyDown={e=>key(e,index)}>{face===0&&index===4?<span className="cube3d-front-label">{ja?'正面':'FRONT'}</span>:null}</button>:null}
    </div>})}</div></div>})}
   </div>
  </div>
  <div className="cube3d-view-tools"><button onClick={()=>setView({x:-22,y:-28})}>{ja?'視点を戻す':'Reset view'}</button><label>{ja?'大きさ':'Zoom'}<input aria-label={ja?'キューブの大きさ':'Cube zoom'} type="range" min=".7" max="1.15" step=".05" value={zoom} onChange={e=>setZoom(Number(e.target.value))}/></label></div>
 </div>
}
