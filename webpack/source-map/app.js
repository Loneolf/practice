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