import { Node } from './node';
function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}

class LinkList<T> {
  protected count: number;
  protected head: Node<T> | undefined;
  protected equalsFn = defaultEquals;

  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  push(item: T) {
    const node = new Node(item);
    let current;

    if (this.head === null || this.head === undefined) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(item: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(item);

      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
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
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.item;
    }
    return undefined;
  }

  remove(item: T) {
    const index = this.indexOf(item);
    return this.removeAt(index);
  }

  indexOf(item: T) {
    let current = this.head;
    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.equalsFn(item, current.item)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.item}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.item}`;
      current = current.next;
    }
    return objString;
  }
}

export default LinkList;
