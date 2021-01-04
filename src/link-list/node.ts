export class Node<T> {
  public item: any;
  public next?: Node<T>;

  constructor (item: T, next?: Node<T>) {
    this.item = item;
    this.next = next;
  }
}

export class DoublyNode<T> extends Node<T> {
  constructor(
    public item: T,
    public next?: DoublyNode<T>,
    public prev?: DoublyNode<T>
  ) {
    super(item, next);
    this.prev = prev;
  }
}

