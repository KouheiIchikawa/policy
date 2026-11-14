// Same face order, row/column cycles and outer-face rotations as CubeModel in the app.
const colors = ['orange', 'red', 'yellow', 'white', 'green', 'blue']
export const solvedCube = () => colors.map(color => Array(9).fill(color))
export function turnCube(input, {kind, index, delta}) {
  const s = input.map(face => [...face])
  const read = face => Array.from({length:3}, (_,i) => s[face][kind === 'row' ? index*3+i : i*3+index])
  const write = (face, values) => values.forEach((v,i) => {s[face][kind === 'row' ? index*3+i : i*3+index] = v})
  const cycle = kind === 'row' ? [4,0,5,1] : [2,0,3,1]
  const slices = cycle.map(read)
  cycle.forEach((face,i) => write(face,slices[(i+(delta>0?3:1))%4]))
  let side = -1, direction = delta
  if(kind === 'row') {if(index===0)side=2; if(index===2){side=3;direction=-delta}}
  else {if(index===0){side=4;direction=-delta} if(index===2)side=5}
  if(side>=0){const old=[...s[side]];for(let y=0;y<3;y++)for(let x=0;x<3;x++){const dx=direction>0?2-y:y,dy=direction>0?x:2-x;s[side][dy*3+dx]=old[y*3+x]}}
  return s
}
export const orangeComplete = s => s[0].every(c => c === 'orange')
export const lessons = [
  [{kind:'row',index:1,delta:1}],
  [{kind:'row',index:2,delta:1},{kind:'col',index:2,delta:-1}],
  [{kind:'row',index:1,delta:1},{kind:'col',index:1,delta:-1},{kind:'row',index:0,delta:-1}],
].map(scramble => {
 const start=scramble.reduce(turnCube,solvedCube())
 const moves=[...scramble].reverse().map(m=>({...m,delta:-m.delta}))
 return {start,moves,states:moves.reduce((states,m)=>[...states,turnCube(states.at(-1),m)],[start])}
})
