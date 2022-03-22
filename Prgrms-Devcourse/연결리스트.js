// 연결리스트
// node 생성
class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

// SinglyLinkedList
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // 탐색
  find(value) {
    let currNode = this.head;
    
    // value를 찾을때까지 다음요소가 넘어감
    while(currNode.value !== value) {
      // value 가 존재하지않을때 예외처리
      if(currNode.next === null){ 
        return "none"
      } 
      currNode = currNode.next;
    }
    // 값을 찾으면 해당 노드 반환
    return currNode;
  }

  // 추가
  append(newValue) {
    const newNode = new Node(newValue); // node 생성
    if(this.head === null) { // head가 비어있으면
      this.head = newNode; // head에 생성된 노드 넣기
      this.tail = newNode; // tail에 생성된 노드 넣기
    } else { // head가 있으면
      this.tail.next = newNode; // tail 뒤에 생성된 노드 넣기
      this.tail = newNode; // 넣은 노드 tail로 바꾸기
    }
    this.count += 1;
  }

  // 삽입
  insert(node, newValue) {
    const newNode = new Node(newValue); // 노드 생성
    let current = this.find(node); // 입력받은 노드
    if(current === "none"){
      return "입력값을 바르게 입력해주세요.";
    }
    newNode.next = current.next; // 새 노드 다음을 입력받은 노드의 다음을 가르키도록 함
    current.next = newNode; // 입력받은 노드의 다음이 새 노드를 가르키게 만듬
    this.count += 1;
  }

  // 삭제
  remove(value) {
    let preNode = this.head; // 이전노드 head로 설정
    
    // value를 찾을때까지 다음요소가 넘어가며 preNode가 변경
    while(preNode.next.value !== value) {
        // console.log(preNode.next.next)
        // value 값이 존재하지 않을 때 예외처리
        if(preNode.next.next === null){
          return "none";
        } 
        preNode = preNode.next;
      }
    // preNode를 찾으면 이전노드의 다음이 다음의 다음을 가르키도록 변경
    if(preNode.next !== null){
      preNode.next = preNode.next.next;
    }
    this.count -= 1;
  }

  // 크기
  size() {
    console.log(this.count);
  }
  // 배열로 이쁘게 보여주는 함수
  display() {
    let currNode = this.head;
    let displayString = "[";
    while(currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString
      .substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}

// Doubly Linked List
class DoublyLinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // 탐색
  find(value) {
    let currNode = this.head;
    // value를 찾을때까지 다음요소가 넘어감
    while(currNode.value !== value) {
      // value 가 존재하지않을때 예외처리
      if(currNode.next === null){ 
        return "none"
      } 
      currNode = currNode.next;
    }
    // 값을 찾으면 해당 노드 반환
    return currNode;
  }

  // 추가
  append(newValue) {
    const newNode = new Node(newValue); // node 생성
    if(this.head === null) { // head가 비어있으면
      this.head = newNode; // head에 생성된 노드 넣기
      this.tail = newNode; // tail에 생성된 노드 넣기
    } else { // head가 있으면
      this.tail.next = newNode; // tail 뒤에 생성된 노드 넣기
      newNode.prev = this.tail; // 현재 tail 생성된 노드의 prev
      this.tail = newNode; // 넣은 노드 tail로 바꾸기
    }
    this.count += 1;
  }

  // 삽입
  insert(node, newValue) {
    const newNode = new Node(newValue); // 노드 생성
    let current = this.find(node); // 입력값이 노드 어디 있는지 찾아줌
    if(current === "none"){
      return "입력값을 바르게 입력해주세요.";
    }
    if(current.next === null){ // 현재 입력값 다음이 null이면
      newNode.next = null; // 새 노드 다음 null
      newNode.prev = current; // 새 노드 이전 => 입력받은 노드
      current.next = newNode; // 입력받은노드 다음 => 새 노드
    } else {
      newNode.next = current.next; // 새 노드 다음 => 입력받은 노드의 다음
      newNode.prev = current; // 새 노드 이전 => 입력받은 노드
      current.next.prev = newNode; // 입력받은 노드 다음의 이전 노드 => 새 노드
      current.next = newNode; // 입력받은 노드의 다음 => 새 노드
    }
    this.count += 1;
  }

  // 삭제
  remove(value) {
    let preNode = this.head; // 이전노드 head로 설정
    // value를 찾을때까지 다음요소가 넘어가며 preNode가 변경
    while(preNode.next.value !== value) {
        // console.log(preNode.next.next)
        // value 값이 존재하지 않을 때 예외처리
        if(preNode.next.next === null){
          return "none";
        } 
        preNode = preNode.next;
      }
    // preNode를 찾으면 이전노드의 다음이 다음의 다음을 가르키도록 변경
    if(preNode.next !== null){
      preNode.prev = preNode.prev.prev;
      preNode.next = preNode.next.next;
    }
    this.count -= 1;
  }

  // 크기
  size() {
    console.log(this.count);
  }
  // 배열로 이쁘게 보여주는 함수
  display() {
    let currNode = this.head;
    let displayString = "[";
    while(currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
      // console.log(currNode.prev, "&", currNode.value,"&", currNode.next.value);      
    }
    displayString = displayString
      .substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}

// Cricular Linked List 
class CricularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // 탐색
  find(value) {
    let currNode = this.head;
    // value를 찾을때까지 다음요소가 넘어감
    while(currNode.value !== value) {
      // value 가 존재하지않을때 예외처리
      if(currNode.next === null){ 
        return "none"
      } 
      currNode = currNode.next;
    }
    // 값을 찾으면 해당 노드 반환
    return currNode;
  }

  // 추가
  append(newValue) {
    const newNode = new Node(newValue); // node 생성
    if(this.head === null) { // head가 비어있으면
      this.head = newNode; // head에 생성된 노드 넣기
      this.tail = newNode; // tail에 생성된 노드 넣기
    } else { // head가 있으면
      this.tail.next = newNode; // tail 뒤에 생성된 노드 넣기
      this.tail = newNode; // 넣은 노드 tail로 바꾸기
    }
    this.tail.next = this.head; // tail 다음을 head에 연결
    this.count += 1;
  }

  // 삽입
  insert(node, newValue) {
    const newNode = new Node(newValue); // 노드 생성
    let current = this.find(node); // 입력받은 노드
    if(current === "none"){
      return "입력값을 바르게 입력해주세요.";
    }
    newNode.next = current.next; // 새 노드 다음을 입력받은 노드의 다음을 가르키도록 함
    current.next = newNode; // 입력받은 노드의 다음이 새 노드를 가르키게 만듬
    this.count += 1;
  }

  // 삭제
  remove(value) {
    let preNode = this.head; // 이전노드 head로 설정
    
    // value를 찾을때까지 다음요소가 넘어가며 preNode가 변경
    while(preNode.next.value !== value) {
        // console.log(preNode.next.next)
        // value 값이 존재하지 않을 때 예외처리
        if(preNode.next.next === null){
          return "none";
        } 
        preNode = preNode.next;
      }
    // preNode를 찾으면 이전노드의 다음이 다음의 다음을 가르키도록 변경
    if(preNode.next !== null){
      preNode.next = preNode.next.next;
    }
    this.count -= 1;
  }

  // 크기
  size() {
    console.log(this.count);
  }
  // 배열로 이쁘게 보여주는 함수
  display() {
    let currNode = this.head;
    let displayString = "[";
    while(currNode !== null) {
      // console.log(currNode);
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString
      .substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(5);
// linkedList.display();
// console.log(linkedList.find(8));
// console.log(linkedList.remove(8));
// linkedList.remove(5);
// linkedList.remove(8);
// linkedList.display();
// linkedList.insert(2, 10);
// linkedList.display();
// linkedList.size();

const doublylinkedList = new DoublyLinkedList();
doublylinkedList.append(1);
doublylinkedList.append(2);
doublylinkedList.append(3);
doublylinkedList.append(5);
// doublylinkedList.insert(2, 10);
// doublylinkedList.remove(5);
// doublylinkedList.remove(8);
doublylinkedList.display();

const cricularlinkedList = new CricularLinkedList();
cricularlinkedList.append(1);
cricularlinkedList.append(2);
cricularlinkedList.append(3);
cricularlinkedList.append(5);
// cricularlinkedList.display(); // 다 연결돼있으니 계속 도는게 맞음