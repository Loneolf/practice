import hello from './hello'
import img1 from '../img/1.png'
import img2 from '../img/safe.svg'
import img3 from '../img/2.jpg'
import tc from './text.txt'
import './css/style.css'
// import './css/style.less'
import './css/style.scss'
import _ from 'lodash'
import './lodashImport'

console.log(_.join(['index', 'loaded', 'sadfasdfas'], ' '))


hello()

const button = document.createElement('button')
button.innerHTML = '点击加法'
app.appendChild(button)
button.addEventListener('click', ()=> {
    import(/* webpackChunkName: 'math', webpackPreload:true */'./math').then(({add}) => {
        console.log(add(33,44))
    })
})


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

console.log('aaaagaos23wasdfasdfaeasdfadfasrwr')
// console.log('aaa2333', img3)

const iconMap = {
    '我':"&#x6211;",
    '爱':"&#x7231;",
    '你':"&#x4f60;",
    '从':"&#x4ece;",
    '前':"&#x524d;",
    '到':"&#x5230;",
    '现':"&#x73b0;",
    '在': "&#x5728;"
}
const arr =  ['我', '爱', '你', '从', '前', '到', '现', '在']
const spanWrap = document.createElement('span')
for (let i = 0; i < arr.length; i++) {
    const spanDom = document.createElement('span')
    spanDom.classList.add('icon')
    spanDom.innerHTML=[iconMap[arr[i]]]
    spanWrap.appendChild(spanDom)
}
app.appendChild(spanWrap)

