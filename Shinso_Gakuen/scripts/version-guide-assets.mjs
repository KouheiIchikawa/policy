import {readFileSync,writeFileSync} from 'node:fs'
import {createHash} from 'node:crypto'
const path='guide.html'
let html=readFileSync(path,'utf8')
for(const name of ['page.js','page.css']){
 const hash=createHash('sha256').update(readFileSync(`assets/${name}`)).digest('hex').slice(0,12)
 html=html.replaceAll(new RegExp(`assets/${name.replace('.','\\.')}(?:\\?v=[a-f0-9]+)?`, 'g'),`assets/${name}?v=${hash}`)
}
writeFileSync(path,html)
