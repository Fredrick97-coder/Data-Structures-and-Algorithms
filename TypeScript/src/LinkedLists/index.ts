class LinkedListNode {
  public data: number;
  public Next: LinkedListNode | null;

  constructor(data: number) {
    this.data = data;
    this.Next = null;
  }
}

class LinkedList {
  public head: LinkedListNode | null;
  constructor(head: LinkedListNode | null) {
    this.head = head;
  }

  public print(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.Next;
    }
  }

  public pushNode(data: number): void {
    if (this.head === null) {
      this.head = new LinkedListNode(data);
    } else {
      let current = this.head;
      while (current.Next !== null) {
        current = current.Next;
      }
      current.Next = new LinkedListNode(data);
    }
  }

  public insertAtHead(data: number): void {
    const newNode = new LinkedListNode(data);
    newNode.Next = this.head;
    this.head = newNode;
  }

  public insertAtTail(data: number): void {
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.Next !== null) {
      current = current.Next;
    }
    current.Next = newNode;
  }

  public insertAtPosition(data: number, position: number): void {
    if (position === 0) {
      this.insertAtHead(data);
      return;
    }
    const newNode = new LinkedListNode(data);
    let current = this.head;
    let currentPosition = 0;
    while (current !== null && currentPosition < position) {
      current = current.Next;
      currentPosition++;
    }
    if (current === null) {
      return;
    }
    newNode.Next = current.Next;
    current.Next = newNode;
  }

  public deleteAtHead(): void {
    if (this.head === null) {
      return;
    }
    this.head = this.head.Next;
  }

  public listLength(): number {
    let current = this.head;
    let length = 0;

    while (current !== null) {
      length++;
      current = current.Next;
    }
    return length;
  }
}

const node = new LinkedListNode(5);
const linkedList = new LinkedList(node);
linkedList.pushNode(10);
linkedList.pushNode(15);
linkedList.pushNode(20);
linkedList.pushNode(25);
linkedList.insertAtTail(15);
linkedList.insertAtPosition(30, 4);
linkedList.insertAtPosition(100, 3);
linkedList.deleteAtHead();
console.log(`Length of the list is ${linkedList.listLength()}`);
linkedList.print();
