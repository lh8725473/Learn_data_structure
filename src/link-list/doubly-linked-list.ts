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

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = this.head.next; // {1}
        // if there is only one item, then we update tail as well //NEW
        if (this.count === 1) {
          // {2}
          this.tail = undefined;
        } else {
          this.head.prev = undefined; // {3}
        }
      } else if (index === this.count - 1) {
        // last item //NEW
        current = this.tail; // {4}
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        // link previous with current's next - skip it to remove
        previous.next = current.next; // {6}
        current.next.prev = previous; // NEW
      }
      this.count--;
      return current.item;
    }
    return undefined;
  }

  indexOf(element: T) {
    let current = this.head;
    let index = 0;

    while (current != null) {
      if (this.equalsFn(element, current.item)) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.item}`;
    let current = this.head.next;
    while (current != null) {
      objString = `${objString},${current.item}`;
      current = current.next;
    }
    return objString;
  }

  inverseToString() {
    if (this.tail == null) {
      return '';
    }
    let objString = `${this.tail.item}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.item}`;
      previous = previous.prev;
    }
    return objString;
  }

}

export default DoublyLinkedList;
