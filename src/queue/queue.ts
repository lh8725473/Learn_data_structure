class Queue<T> {
  private count: number;
  private items: any;
  private lowestCount: number;

  constructor() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }

  enqueue(item: T) {
    this.items[this.count] = item;
    this.count++;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount ++;
    return result;
  }

  peek(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size(): number {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }

  isEmpty(): boolean {
    return this.count - this.lowestCount === 0;
  }
}

export default Queue;
