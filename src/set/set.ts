class Set<T> {
  private items: any;

  constructor() {
    this.items = {};
  }

  add(item: T) {
    if (!this.has(item)) {
      this.items[item] = item;
      return true;
    }
    return false;
  }

  delete(item: T) {
    if (this.has(item)) {
      delete this.items[item];
      return true;
    }
    return false;
  }

  size() {
    return Object.keys(this.items).length;
  }

  values(): T[] {
    return Object.values(this.items);
  }

  // 合集
  union(otherSet: Set<T>) {
    const unionSet = new Set<T>();

    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));

    return unionSet;
  }

  // 交集
  intersection(otherSet: Set<T>) {
    const intersectionSet = new Set<T>();

    const values = this.values();
    const otherValues = otherSet.values();

    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  // 差集
  difference(otherSet: Set<T>) {
    const differenceSet = new Set<T>();

    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  }

  // 子集
  isSubsetOf(otherSet: Set<T>) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });

    return isSubset;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const values = this.values();
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i].toString()}`;
    }
    return objString;
  }

  has(item: T) {
    return Object.prototype.hasOwnProperty.call(this.items, item);
  }
}

export default Set;
