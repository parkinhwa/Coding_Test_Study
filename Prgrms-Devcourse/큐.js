// Linear Queue
class Queue {
  constructor() { // 생성자
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) { 
    this.queue[this.rear++] = value; // 끝에 추가
  }

  dequeue() {
    const value = this.queue[this.front]; // 맨앞에 값 꺼내고
    delete this.queue[this.front]; // 삭제
    this.front += 1; // front +1
    return value; // 삭제한 값 리턴
  }

  peek() {
    return this.queue[this.front]; // 맨 앞 값 리턴
  }

  size() {
    return this.rear - this.front; // 맨뒤 - 맨앞
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
queue.enqueue(8);
console.log(queue.size()); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4

// linkedList로 Queue 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) { //head가 null이면
      this.head = this.tail = newNode; // head와 tail에 새로운값 넣음
    } else { // head가 null이 아니면
      this.tail.next = newNode; // tail 다음 새로운값 넣고
      this.tail = newNode; // tail은 새로 들어온 값
    }
    this.size += 1; // size++;
  }

  dequeue() {
    const value = this.head.value; // value는 head
    this.head = this.head.next; // head는 현재 head의 다음꺼
    this.size -= 1; //size--;
    return value; // value 리턴 (삭제한 값)
  }

  peek() {
    return this.head.value; // 맨 처음값(head) 리턴
  }
}

// Circular queue
class Queue {
  constructor() { // 생성자
    this.maxSize = maxSize; // maxSize 추가
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if(this.isFull()) { // queue 가득참
      console.log("Queue is full.");
      return;
    }
    this.queue[this.rear++] = value; // 끝에 추가
    this.rear = (this.rear + 1) % this.maxSize; // rear은 현재 (rear + 1) % 현재 큐 사이즈
    this.size += 1; // size++;
  }

  dequeue() {
    const value = this.queue[this.front]; // 맨앞에 값 꺼내고
    delete this.queue[this.front]; // 삭제
    this.front = (this.front + 1) % this.maxSize; // front는 (front + 1) % 현재 큐 사이즈
    this.size -= 1;
    return value; // 삭제한 값 리턴
  }

  isFull() {
    return this.size === this.maxSize; // full이면 true
  }
  
  peek() {
    return this.queue[this.front]; // 맨 앞 값 리턴
  }

  size() {
    return this.rear - this.front; // 맨뒤 - 맨앞
  }
}