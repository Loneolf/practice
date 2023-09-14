import './index.css'
import './input.js'

class AA {
    constructor() {
        this.str = 'hello world'
    }
    sayHellow () {
        console.log(this.str)
    }
}

let a = new AA()
a.sayHellow()

console.log('aaa多少人曾爱慕你')

button.addEventListener('click', ()=> {
    let div = document.createElement('div')
    div.className='item'
    box.appendChild(div)
})

if (module.hot) {
    // 接受一个文件，当它变化时热替换，回调函数在热替换时执行
    module.hot.accept("./input.js",() => {
      
    });
}