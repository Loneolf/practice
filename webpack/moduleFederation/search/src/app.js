
Promise.all([import('nav/Header'), import('home/List')])
    .then(([{default: Header}, {default: List}])=> {
        
        const body = document.createElement('div')
        body.appendChild(Header())
        body.appendChild(List(7))
        
        document.body.appendChild(body)
    })

