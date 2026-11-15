import Cube3D from './Cube3D'
import {useEffect,useRef,useState} from 'react'
import {lessons,turnCube,orangeComplete} from './cubeGuideModel'

export default function CubePractice({language}){
 const ja=language==='ja',[level,setLevel]=useState(0),[history,setHistory]=useState([]),[selected,setSelected]=useState(4),busy=useRef(false),[animation,setAnimation]=useState(null)
 const start=lessons[level].start,state=history.reduce((s,m)=>turnCube(s,m),start),complete=orangeComplete(state)
 const names=ja?{orange:'オレンジ',red:'赤',yellow:'黄',white:'白',green:'緑',blue:'青'}:{orange:'Orange',red:'Red',yellow:'Yellow',white:'White',green:'Green',blue:'Blue'}
 const label=m=>ja?`${m.kind==='row'?'上から':'左から'}${m.index+1}${m.kind==='row'?'行':'列'}目を${m.kind==='row'?(m.delta>0?'右':'左'):(m.delta>0?'下':'上')}へ`:`${m.kind==='row'?'Row':'Column'} ${m.index+1}: ${m.kind==='row'?(m.delta>0?'right':'left'):(m.delta>0?'down':'up')}`
 function move(kind,delta,index=kind==='row'?Math.floor(selected/3):selected%3){if(busy.current)return;busy.current=true;setAnimation({kind,delta,index})}
 function undo(){if(busy.current||!history.length)return;busy.current=true;const m=history.at(-1);setAnimation({...m,delta:-m.delta,undo:true})}
 useEffect(()=>{if(!animation)return;const timer=setTimeout(()=>{setHistory(h=>animation.undo?h.slice(0,-1):[...h,animation]);setAnimation(null);busy.current=false},360);return()=>clearTimeout(timer)},[animation])
 function reset(){setHistory([]);setAnimation(null);busy.current=false;setSelected(4)}
 return <section className="cg-demo cg-practice" aria-label={ja?'自由に操作する練習盤':'Interactive practice board'}>
  <p className="cg-eyebrow">PLAY / YOUR TURN</p><h2>{ja?'今度は、自分で動かしてみよう':'Your turn: move the board yourself'}</h2>
  <p>{ja?'3Dキューブをドラッグして見回せます。「行・列を回す」に切り替えると、正面の行や列を動かせます。スマホでも指で操作できます。':'Drag to look around the 3D cube. Switch to Turn rows / columns to turn a front row or column. Touch gestures work too.'}</p>
  <div className="cg-tabs" role="group" aria-label={ja?'自由練習の問題':'Practice difficulty'}>{lessons.map((_,i)=><button key={i} aria-pressed={level===i} onClick={()=>{setLevel(i);reset()}}>{ja?`練習${i+1}（${i+1}手の例題）`:`Practice ${i+1} (${i+1}-move example)`}</button>)}</div>
  <div className="cg-workspace"><div className="cg-front"><h3>{ja?'正面・ゴールの面':'Front / target face'}</h3>
   <Cube3D state={state} selected={selected} onSelect={setSelected} onMove={move} animation={animation} names={names} ja={ja}/><p>{ja?'オレンジ':'Orange'} <strong>{state[0].filter(c=>c==='orange').length} / 9</strong></p>
  </div><div className="cg-instruction"><h3>{ja?'クリックと矢印でも操作できる':'You can also click and use arrows'}</h3><p>{ja?`選択中：上から${Math.floor(selected/3)+1}行目・左から${selected%3+1}列目`:`Selected: row ${Math.floor(selected/3)+1}, column ${selected%3+1}`}</p><div className="cg-arrow-controls"><button disabled={!!animation} onClick={()=>move('row',-1)} aria-label={ja?'選択した行を左へ':'Move selected row left'}>← {ja?'行を左':'Row left'}</button><button disabled={!!animation} onClick={()=>move('row',1)} aria-label={ja?'選択した行を右へ':'Move selected row right'}>{ja?'行を右':'Row right'} →</button><button disabled={!!animation} onClick={()=>move('col',-1)} aria-label={ja?'選択した列を上へ':'Move selected column up'}>↑ {ja?'列を上':'Column up'}</button><button disabled={!!animation} onClick={()=>move('col',1)} aria-label={ja?'選択した列を下へ':'Move selected column down'}>{ja?'列を下':'Column down'} ↓</button></div><p className="cg-disclaimer">{ja?'マスをクリックして選び、矢印ボタンを押してもOK。キーボードの矢印キーでも動かせます。':'Click a sticker, then an arrow button. Keyboard arrow keys work when a sticker has focus.'}</p><div className="cg-actions"><button disabled={!history.length||!!animation} onClick={undo}>{ja?'一手取り消す':'Undo move'}</button><button onClick={reset}>{ja?'この問題をやり直す':'Reset this puzzle'}</button></div>
   <p role="status">{animation?(ja?'回転中…':'Turning…'):complete?(ja?'オレンジ一面、完成！':'Orange face complete!'):(ja?`${history.length}手操作しました`:`${history.length} moves made`)}</p>
   <ol className="cg-operation-log" aria-label={ja?'操作ログ':'Move history'} start={Math.max(1,history.length-4)}>{history.slice(-5).map((m,i)=><li key={`${history.length-5+i}-${label(m)}`}>{label(m)}</li>)}</ol>
  </div></div><p className="cg-disclaimer">{ja?'見回す操作では色と手数は変わりません。行・列と矢印の方向は、オレンジの正面を基準にしています。「行・列を回す」では操作しやすい正面の視点へ戻ります。':'Orbiting changes only the view. Row, column and arrow directions refer to the orange front. Turn mode returns to a front-oriented view.'}</p>
 </section>
}
