import LinkList from './link-list';
import { DoublyNode } from './node';
function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}

class DoublyLinkedList<T> extends LinkList<T> {
  protected head: DoublyNode<T> | undefined;
  protected tail: DoublyNode<T> | undefined;

  constructor() {
    super();
  }

  push(item: T) {
    const node = new DoublyNode(item);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  insert(item: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(item);
      let current = this.head;

      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        }
      } else if (index === this.count){
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;

        // const pre = this.getElementAt(index - 1);
        // const next = pre.next;
        // node.next = next;
        // pre.next = node;
        // next.prev = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
}

export default DoublyLinkedList;
