// Cube-space vectors use CSS coordinates (x right, y down, z towards the viewer).
export const faceBasis=[
 {n:[0,0,1],u:[1,0,0],v:[0,1,0]},
 {n:[0,0,-1],u:[-1,0,0],v:[0,1,0]},
 {n:[0,-1,0],u:[1,0,0],v:[0,0,1]},
 {n:[0,1,0],u:[1,0,0],v:[0,0,-1]},
 {n:[-1,0,0],u:[0,0,1],v:[0,1,0]},
 {n:[1,0,0],u:[0,0,-1],v:[0,1,0]},
]
export function stickerPosition(face,index){const {n,u,v}=faceBasis[face],x=index%3-1,y=Math.floor(index/3)-1;return n.map((a,i)=>a+u[i]*x+v[i]*y)}
export function projectedVector(vector,view){
 const a=view.x*Math.PI/180,b=view.y*Math.PI/180,[x,y,z]=vector
 return [Math.cos(b)*x+Math.sin(b)*z,Math.cos(a)*y-Math.sin(a)*(-Math.sin(b)*x+Math.cos(b)*z)]
}
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]
export function gestureMove(face,index,dx,dy,view){
 const basis=faceBasis[face],length=Math.hypot(dx,dy)
 if(length<18)return null
 const scored=[basis.u,basis.v].map(t=>{const p=projectedVector(t,view),size=Math.hypot(...p);return {t,score:size>.08?(dx*p[0]+dy*p[1])/(length*size):0}}).sort((a,b)=>Math.abs(b.score)-Math.abs(a.score))
 if(Math.abs(scored[0].score)<.4)return null
 const axis=cross(basis.n,scored[0].t),sign=Math.sign(scored[0].score),p=stickerPosition(face,index)
 if(axis[1])return {kind:'row',index:p[1]+1,delta:axis[1]*sign}
 if(axis[0])return {kind:'col',index:p[0]+1,delta:-axis[0]*sign}
 return {kind:'depth',index:p[2]+1,delta:axis[2]*sign}
}
