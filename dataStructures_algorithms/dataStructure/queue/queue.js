export default class Queue {
    constructor() {
        this.item =  []
    }
    // 入队
    enqueue(value) {
        this.item.push(value)
    }

    // 出队, 从队头删除元素
    dequeue() {
        return this.item.shift()
    }

    // 查看队列头元素
    peek() {
        return this.item[0]
    }
    // 查看队列长度
    size() {
        return this.item.length
    }
    // 查看队列是否为空
    isEmpty() {
        return this.item.length === 0
    }

    // 清空队列
    clear() {
        this.item = []
    }

    // 查看队列元素
    toString() {
        return this.item.toString()
    }
}
