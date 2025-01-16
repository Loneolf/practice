// 优先级队列

export default class priorityQueue {
    constructor() {
        this.item =  []
    }
    // 入队
    enqueue(element, priority) {
        const item = { element, priority };
        let added = false;
        for (let i = 0; i < this.item.length; i++) {
            if (item.priority < this.item[i].priority) {
                this.item.splice(i, 0, item);
                added = true;
                break;
            }
        }
        if (!added) {
            this.item.push(item);
        }
    }

    // 出队, 从队头删除元素
    dequeue() {
        if (this.isEmpty()) return undefined;
        return this.item.shift().element
    }

    // 查看队列头元素
    peek() {
        if (this.isEmpty()) return undefined;
        return this.item[0].element
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
        if (this.isEmpty()) return '';
        let result = ''
        for (let i = 0; i < this.item.length; i++) {
            result += this.item[i].element + '-' + this.item[i].priority + ' '
        }
        return result
    }
}
