export default class Deque {
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

    // 入队, 从队头添加元素，指针前移一位
    addFront(value) {
        if (this.isEmpty()) {
            this.enqueue(value)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.item[this.lowestCount] = value
        } else {
            for(let i = this.count; i > 0; i--) {
                this.item[i] = this.item[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.item[0] = value
        }
    }

    // 出队, 从队头删除元素，指针后移一位，返回删除的元素
    dequeue() {
        if (this.isEmpty()) return undefined
        const result = this.item[this.lowestCount]
        delete this.item[this.lowestCount]
        this.lowestCount++
        return result
    }
    // 出队, 从队尾删除元素，计数器前移一位，返回删除的元素
    removeBack() {
        if (this.isEmpty()) return undefined
        this.count--
        const result = this.item[this.count]
        delete this.item[this.count]
        return result
    }

    // 查看队列头元素
    peek() {
        if (this.isEmpty()) return undefined
        return this.item[this.lowestCount]
    }

    // 查看队列尾元素
    peekBack() {
        if (this.isEmpty()) return undefined
        return this.item[this.count - 1]
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
