interface LinkNode<T> {
  key: T;
  next: LinkNode<T> | null;
}

let head: null | LinkNode<String> = null;

function insertNode(key: String) {
  let newNode: LinkNode<String> = { key: key, next: null };
  if (head == null) {
    head = newNode;
  } else {
    let node = head;
    while (node.next != null) {
      node = node.next;
    }
    node.next = newNode;
  }
}

function insertBeg(key: String) {
  let newNode: LinkNode<String> = { key: key, next: null };
  newNode.next = head;
  head = newNode;
}

function display() {
  let node = head;
  console.log("Linked List: ");
  while (node != null) {
    console.log(node.key);
    node = node.next;
  }
}

function doTask() {
  insertNode("Simran");
  display();
  insertNode("Manisha");
  display();
  insertBeg("Random");
  display();
}

export default doTask;
