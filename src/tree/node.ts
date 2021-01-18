class Node<T> {
  left: Node<T>;
  right: Node<T>;

  constructor(public key: T) {

  }
}

export default Node;
