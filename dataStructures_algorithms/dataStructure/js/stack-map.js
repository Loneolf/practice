class Stack {
    constructor() {
        this.obj = {}
        this.count = 0
    }
    push(value) {
        this.obj[this.count] = value
        this.count++
    }
    pop() {
        if (this.count === 0) {
            return undefined
        }
        this.count--
        return this.obj[this.count]
    }
    peek() {
        if (this.count === 0) {
            return undefined
        }
        return this.obj[this.count - 1]
    }
    isEmpty() {
        return this.count === 0
    }
    size() {
        return this.count
    }

    clear() {
        this.obj = {}
        this.count = 0
    }
    

}

export { Stack }