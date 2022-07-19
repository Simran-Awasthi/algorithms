interface LinkNode<T> {
  key: T;
  next: LinkNode<T> | null;
  // constructor(key: T, next: LinkNode<T> | null) {
  //   this.key = key;
  //   this.next = next;
  // }
}

class LinkedList<T> {
  head: null | LinkNode<T> = null;
  insert(key: T) {
    let newNode: LinkNode<T> = { key: key, next: null };
    if (this.head == null) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next != null) {
        node = node.next;
      }
      node.next = newNode;
    }
    return this;
  }
  insertBeg(key: T) {
    let newNode: LinkNode<T> = { key: key, next: null };
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  insertAfterGiven(key: T, newKey: T) {
    let newNode: LinkNode<T> = { key: newKey, next: null };
    let node = this.head;
    if (node == null) {
      this.head = newNode;
    } else {
      while (node.next != null) {
        if (node.key === key) {
          break;
        }
        node = node.next;
      }
      newNode.next = node.next;
      node.next = newNode;
    }
    return this;
  }
  insertBefore(key: T, newKey: T) {
    let newNode: LinkNode<T> = { key: newKey, next: null };
    let node = this.head;
    if (node == null) {
      this.head = newNode;
    } else {
      while (node.next?.next) {
        if (node.next.key === key) {
          break;
        }
        node = node.next;
      }
      newNode.next = node.next;
      node.next = newNode;
    }
    return this;
  }
  removeEnd() {
    if (this.head == null) {
      return this;
    } else {
      let node: LinkNode<T> | undefined = this.head;
      while (node?.next?.next) {
        node = node?.next;
      }
      node.next = null;
    }
    return this;
  }
  removeBeg() {
    if (this.head == null) {
      return this;
    } else {
      this.head = this.head.next;
    }
    return this;
  }
  removekey(key: T) {
    if (this.head == null) {
      return this;
    } else {
      let node = this.head;
      while (node.next?.next) {
        if (node.next.key === key) {
          break;
        }
        node = node.next;
      }
      node.next = node.next?.next ?? null;
    }
    return this;
  }

  display() {
    let node = this.head;
    console.log("Linked List: ");
    while (node != null) {
      console.log(node.key);
      node = node.next;
    }
    return this;
  }
}

class Student {
  name: string;
  rollno: number;
  constructor(name: string, rollno: number) {
    this.name = name;
    this.rollno = rollno;
  }
}

const main = () => {
  let linkedList = new LinkedList<number>();
  linkedList
    .insert(1)
    .display()
    .insert(3)
    .display()
    .insertBeg(4)
    .display()
    .insertAfterGiven(1, 5)
    .display()
    .removeBeg()
    .display()
    .removeEnd()
    .insertBefore(5, 4)
    .insertBefore(4, 3)
    .insertBefore(3, 2)
    .display()
    .removekey(3)
    .display();
};

export default main;
