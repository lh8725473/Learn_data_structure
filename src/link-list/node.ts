export class Node<T> {
  public item: any;
  public next: Node<T> | undefined;

  constructor (item: T, next?: Node<T>) {
    this.item = item;
    this.next = next;
  }
}

