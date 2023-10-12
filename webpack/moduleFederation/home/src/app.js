import List from './List'

import('nav/Header').then((Header)=> {
    const body = document.createElement('div')
    body.appendChild(Header.default())
    body.appendChild(List(6))
    document.body.appendChild(body)
})

