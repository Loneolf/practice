class Stack {
    constructor() {
        this.list = []
    }
    push(value) {
        this.list.push(value)
    }
    pop() {
        return this.list.pop()
    }
    peek() {
        return this.list[this.list.length - 1]
    }
    isEmpty() {
        return this.list.length === 0
    }
    size() {
        return this.list.length
    }
    
    clear() {
        this.list = []
    }

}

export { Stack }