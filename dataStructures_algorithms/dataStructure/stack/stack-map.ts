class Stack {
    private obj: { [key: number]: any } = {}
    private count: number = 0
    
    push<T>(value: T) : void {
        this.obj[this.count] = value
        this.count++
    }
    pop<T>(): T | undefined {
        if (this.count === 0) {
            return undefined
        }
        this.count--
        return this.obj[this.count]
    }
    peek<T>(): T | undefined {
        if (this.count === 0) {
            return undefined
        }
        return this.obj[this.count - 1]
    }
    isEmpty(): boolean {
        return this.count === 0
    }
    size() : number{
        return this.count
    }

    clear() : void{
        this.obj = {}
        this.count = 0
    }
    

}

export { Stack }