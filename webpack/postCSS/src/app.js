import css from './index.css';
import appCss from './css/app.scss'

console.log(css, appCss)
let div = document.createElement('div')
div.className=css.item
document.body.appendChild(div)

let div3 = document.createElement('div')
div3.className='item3'
document.body.appendChild(div3)
console.log('aaaa23333')