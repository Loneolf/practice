class Stack {
    private list: Array<any> = [];
    push<T>(value: T): void {
        this.list.push(value)
    }
    pop<T>(): T | undefined {
        return this.list.pop()
    }
    peek<T>(): T | undefined {
        return this.list[this.list.length - 1]
    }
    isEmpty(): boolean {
        return this.list.length === 0
    }
    size(): number {
        return this.list.length
    }
    
    clear(): void {
        this.list = []
    }

}

export { Stack }