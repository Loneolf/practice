export default class Queue {
    constructor() {
        this.item =  {}
        this.count = 0
        this.lowestCount = 0
    }
    // 入队, 从队尾添加元素，计数器后移一位
    enqueue(value) {
        this.item[this.count] = value
        this.count++
    }

    // 出队, 从队头删除元素，指针后移一位，返回删除的元素
    dequeue() {
        if (this.isEmpty()) return undefined
        const result = this.item[this.lowestCount]
        delete this.item[this.lowestCount]
        this.lowestCount++
        return result
    }

    // 查看队列头元素
    peek() {
        if (this.isEmpty()) return undefined
        return this.item[this.lowestCount]
    }
    // 查看队列长度
    size() {
        return this.count - this.lowestCount
    }
    // 查看队列是否为空
    isEmpty() {
        return this.size() === 0
    }

    // 清空队列
    clear() {
        this.item = {}
        this.count = 0
        this.lowestCount = 0
    }

    // 查看队列元素
    toString() {
        if (this.isEmpty()) return ''
        let result = `${this.item[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++) {
            result += `,${this.item[i]}`
        }
        return result
    }
}
