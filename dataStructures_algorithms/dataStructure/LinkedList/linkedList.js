import Node from '../common/Node.js'

export default class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    /**
     * 在链表的末尾添加一个新元素。
     * @param {*} value - 要添加到链表中的元素。
     */
    push(value) {
        let node = new Node(value)
        if(this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    // 在链表的特定位置插入一个新元素。
    insert(element, position) {
        if (position < 0 || position > this.length) return false
        let node = new Node(element)
        let current = this.head
        let previous = null
        let index = 0
        if (position === 0) {
            node.next = current
            this.head = node
        } else {
            while(index++ < position) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
        }
        this.length++
        return true
    }

    // 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined。
    getElementAt(position) {
        if (position < 0 || position >= this.length) return null
        let current = this.head
        let index = 0
        while(index++ < position) {
            current = current.next
        }
        return current.element
    }

    // 从链表中移除指定位置的元素。
    removeAt(position) {
        if (position < 0 || position >= this.length) return null
        let current = this.head
        let previous = null
        let index = 0
        if (position === 0) {
            this.head = current.next
        } else {
            while(index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.length--
        return current.element
    }

    // 从链表中移除元素。
    remove(element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    // 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
    indexOf(element) {
        let current = this.head
        let index = 0
        while(current) {
            if (current.element === element) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }
    
    toString() {
        if (this.isEmpty()) return ''

        let current = this.head
        let result = `${current.element}`
        while(current.next) {
            current = current.next
            result += `,${current.element}`
        }
        return result
    }
}