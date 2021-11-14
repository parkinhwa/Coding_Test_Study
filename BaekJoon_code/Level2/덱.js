const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let n = Number(input.shift());
let deque = [];
let answer = '';

for(let i = 0; i < n; i++){
  let com = input.shift().split(" ");
  if(com.length === 2){
    if(com[0] === "push_front"){
      deque.unshift(com[1]);
    } else if (com[0] === "push_back"){
      deque.push(com[1])
    }
  } else {
    if(com[0] === "pop_front" && deque.length != 0){
      answer += deque.shift()+"\n"
    } else if(com[0] === "pop_back" && deque.length != 0){
      answer += deque.pop()+"\n"
    } else if(com[0] === "size"){
      answer += deque.length+"\n"
    } else if(com[0] === "empty"){
      if(deque.length === 0){
        answer += "1\n"
      } else {
        answer += "0\n"
      }
    } else if(com[0] === "front" && deque.length != 0){
      answer += deque[0]+"\n"
    } else if(com[0] === "back" && deque.length != 0){
      answer += deque[deque.length-1]+"\n"
    } else{
      answer += "-1\n"
    }
  }
}

console.log(answer)