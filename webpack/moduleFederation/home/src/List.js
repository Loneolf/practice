export default function List(num) {
    const ul = document.createElement('ul')
    for (let i = 0; i < num; i++) {
        const li = document.createElement('li')
        li.innerText = i
        ul.appendChild(li)        
    }
    return ul
} 