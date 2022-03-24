function solution(priorities, location) {
    var answer = 0;
    let arr = [];
    let result = [];

    // 현재 index와 프린터중요도 arr에 넣음
    for(let i = 0; i < priorities.length; i++){
        arr.push([i, priorities[i]]);
    }
  
    // 프린터중요도 정렬함
    priorities = priorities.sort((a, b)=>b-a);

    for(let j = 0; j < arr.length; j++){
        let max = priorities[0]; // max는 priorities에서 제일큰애
        // console.log(max, arr[j])
        if(arr[j][1] < max){ // 현재 arr에 있는 중요도가 max보다 낮으면
            arr.push([arr[j][0], arr[j][1]]); // arr 뒤에 현재 문서들 넣음
            arr.shift(); // arr 맨앞에 있는 값 뺌
            j--; // 뺏으니까 j-1;
        } else { // 현재 arr에 있는 중요도가 max보다 크거나 같으면
            result.push([arr[j][0], arr[j][1]]); // result에 push
            if(arr[j][0] === location){ // arr[j][0](문서순서)가 location이랑 같으면
              answer = result.length; // answer = result길이
            }
            arr.shift(); // arr에서 맨앞뺌 (출력)
            j--; // 뺏기때문에 j-1;
            priorities.shift(); // priorities 맨앞값도 뺌
        }
    }
    return answer;
}

let p = [1, 1, 9, 1, 1, 1];
let l = 0;
console.log(solution(p, l))



// 강사님 풀이
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
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) { //head가 null이면
      this.head = this.tail = newNode; // head와 tail에 새로운값 넣음
    } else { // head가 null이 아니면
      this.tail.next = newNode; // tail 다음 새로운값 넣고
      this.tail = newNode; // tail은 새로 들어온 값
    }
  }

  dequeue() {
    const value = this.head.value; // value는 head
    this.head = this.head.next; // head는 현재 head의 다음꺼
    return value; // value 리턴 (삭제한 값)
  }

  peek() {
    return this.head.value; // 맨 처음값(head) 리턴
  }
}

function solution(priorities, location) {
    var answer = 0;
    const queue = new Queue();
    for (let i = 0; i < priorities.length; i += 1){
      queue.enqueue([priorities[i], i]);
    }

    priorities.sort((a, b) => b - a);
    let count = 0;
    while (true){
      const currentValue = queue.peek();
      if(currentValue[0] < priorities[count]){
        queue.enqueue(queue.dequeue());
      } else {
        const value = queue.dequeue();
        count += 1;
        if(location === value[1]) {
          return count;
        }
      }
    }
  return count;
}
