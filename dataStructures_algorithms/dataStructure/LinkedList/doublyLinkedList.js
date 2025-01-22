import LinkedList from "./linkedList.js";
import DoubleNode from "../common/DoublyNode.js";

export default class DoubleLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = undefined;
  }

  push(element) {
    const node = new DoubleNode(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }
  insert(element, position) {

  }

}