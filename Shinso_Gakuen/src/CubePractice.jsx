import {useRef,useState} from 'react'
import {lessons,turnCube,orangeComplete} from './cubeGuideModel'

export default function CubePractice({language}){
 const ja=language==='ja',[level,setLevel]=useState(0),[history,setHistory]=useState([]),[selected,setSelected]=useState(4),drag=useRef(null)
 const start=lessons[level].start,state=history.reduce((s,m)=>turnCube(s,m),start),complete=orangeComplete(state)
 const names=ja?{orange:'オレンジ',red:'赤',yellow:'黄',white:'白',green:'緑',blue:'青'}:{orange:'Orange',red:'Red',yellow:'Yellow',white:'White',green:'Green',blue:'Blue'}
 const label=m=>ja?`${m.kind==='row'?'上から':'左から'}${m.index+1}${m.kind==='row'?'行':'列'}目を${m.kind==='row'?(m.delta>0?'右':'左'):(m.delta>0?'下':'上')}へ`:`${m.kind==='row'?'Row':'Column'} ${m.index+1}: ${m.kind==='row'?(m.delta>0?'right':'left'):(m.delta>0?'down':'up')}`
 function move(kind,delta,index=kind==='row'?Math.floor(selected/3):selected%3){setHistory(h=>[...h,{kind,delta,index}])}
 function reset(){setHistory([]);drag.current=null;setSelected(4)}
 function down(e){if(e.button!==0||drag.current)return;const tile=e.target.closest('[data-tile]');if(!tile)return;const index=Number(tile.dataset.tile);setSelected(index);drag.current={id:e.pointerId,x:e.clientX,y:e.clientY,index};e.currentTarget.setPointerCapture(e.pointerId)}
 function up(e){const d=drag.current;if(!d||d.id!==e.pointerId)return;drag.current=null;const dx=e.clientX-d.x,dy=e.clientY-d.y;if(Math.max(Math.abs(dx),Math.abs(dy))<18)return;const horizontal=Math.abs(dx)>Math.abs(dy);move(horizontal?'row':'col',horizontal?(dx>0?1:-1):(dy>0?1:-1),horizontal?Math.floor(d.index/3):d.index%3)}
 function key(e){const directions={ArrowLeft:['row',-1],ArrowRight:['row',1],ArrowUp:['col',-1],ArrowDown:['col',1]};if(!directions[e.key])return;e.preventDefault();const i=Number(e.target.dataset.tile);setSelected(i);const [kind,delta]=directions[e.key];move(kind,delta,kind==='row'?Math.floor(i/3):i%3)}
 return <section className="cg-demo cg-practice" aria-label={ja?'自由に操作する練習盤':'Interactive practice board'}>
  <p className="cg-eyebrow">PLAY / YOUR TURN</p><h2>{ja?'今度は、自分で動かしてみよう':'Your turn: move the board yourself'}</h2>
  <p>{ja?'マスを押したまま左右にドラッグすると、その行が動きます。上下なら、その列が動きます。スマホでは指でスワイプ。':'Drag a sticker left or right to move its row, or up or down to move its column. On a phone, swipe with your finger.'}</p>
  <div className="cg-tabs" role="group" aria-label={ja?'自由練習の問題':'Practice difficulty'}>{lessons.map((_,i)=><button key={i} aria-pressed={level===i} onClick={()=>{setLevel(i);reset()}}>{ja?`練習${i+1}（${i+1}手の例題）`:`Practice ${i+1} (${i+1}-move example)`}</button>)}</div>
  <div className="cg-workspace"><div className="cg-front"><h3>{ja?'正面・ゴールの面':'Front / target face'}</h3>
   <div className="cg-stickers cg-large cg-touch" role="group" aria-label={ja?'ドラッグして回せる盤面':'Draggable board'} onPointerDown={down} onPointerUp={up} onPointerCancel={()=>{drag.current=null}} onLostPointerCapture={()=>{drag.current=null}} onKeyDown={key}>
    {state[0].map((color,i)=><button type="button" key={i} data-tile={i} className={`cg-tile cg-${color} ${selected===i?'cg-selected':''}`} aria-label={`${ja?'上から':'Row '}${Math.floor(i/3)+1}${ja?'行目、左から':', column '}${i%3+1}${ja?'列目':''}: ${names[color]}`} aria-pressed={selected===i} onFocus={()=>setSelected(i)} onClick={()=>setSelected(i)}>{color==='orange'?'●':''}</button>)}
   </div><p>{ja?'オレンジ':'Orange'} <strong>{state[0].filter(c=>c==='orange').length} / 9</strong></p>
  </div><div className="cg-instruction"><h3>{ja?'クリックと矢印でも操作できる':'You can also click and use arrows'}</h3><p>{ja?`選択中：上から${Math.floor(selected/3)+1}行目・左から${selected%3+1}列目`:`Selected: row ${Math.floor(selected/3)+1}, column ${selected%3+1}`}</p><div className="cg-arrow-controls"><button onClick={()=>move('row',-1)} aria-label={ja?'選択した行を左へ':'Move selected row left'}>← {ja?'行を左':'Row left'}</button><button onClick={()=>move('row',1)} aria-label={ja?'選択した行を右へ':'Move selected row right'}>{ja?'行を右':'Row right'} →</button><button onClick={()=>move('col',-1)} aria-label={ja?'選択した列を上へ':'Move selected column up'}>↑ {ja?'列を上':'Column up'}</button><button onClick={()=>move('col',1)} aria-label={ja?'選択した列を下へ':'Move selected column down'}>{ja?'列を下':'Column down'} ↓</button></div><p className="cg-disclaimer">{ja?'マスをクリックして選び、矢印ボタンを押してもOK。キーボードの矢印キーでも動かせます。':'Click a sticker, then an arrow button. Keyboard arrow keys work when a sticker has focus.'}</p><div className="cg-actions"><button disabled={!history.length} onClick={()=>setHistory(h=>h.slice(0,-1))}>{ja?'一手取り消す':'Undo move'}</button><button onClick={reset}>{ja?'この問題をやり直す':'Reset this puzzle'}</button></div>
   <p role="status">{complete?(ja?'オレンジ一面、完成！':'Orange face complete!'):(ja?`${history.length}手操作しました`:`${history.length} moves made`)}</p>
   <ol className="cg-operation-log" aria-label={ja?'操作ログ':'Move history'} start={Math.max(1,history.length-4)}>{history.slice(-5).map((m,i)=><li key={`${history.length-5+i}-${label(m)}`}>{label(m)}</li>)}</ol>
  </div></div><p className="cg-disclaimer">{ja?'盤面の向きは固定です。ここでのドラッグは「見回す」ではなく、行・列を動かす操作になります。':'The viewpoint is fixed. Dragging here turns a row or column; it does not rotate the camera.'}</p>
 </section>
}
