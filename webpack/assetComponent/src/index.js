import hello from './hello'
import img1 from '../img/1.png'
import img2 from '../img/safe.svg'
import img3 from '../img/2.jpg'
import tc from './text.txt'
import './css/style.css'
// import './css/style.less'
import './css/style.scss'

hello()

const text = document.createElement('div')
text.textContent = tc
text.classList.add('textContent')
text.style.cssText = 'width: 200px;height:200px;background: #ccc;'
app.appendChild(text)
document.body.classList.add('body')

const imgdom = document.createElement('img')
imgdom.src = img1
app.appendChild(imgdom)

const imgdom2 = document.createElement('img')
imgdom2.src = img2
app.appendChild(imgdom2)

const imgdom3 = document.createElement('img')
imgdom3.src = img3
app.appendChild(imgdom3)

console.log('aaa2333', img3)
