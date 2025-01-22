import node from './Node.js'

export default class DoubleNode extends node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}