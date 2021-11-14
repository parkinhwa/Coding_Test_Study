const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let queue = [];
let n = Number(input.shift());
let answer = '';

for(let i = 0; i < n; i++){
  let com = input.shift().split(" ");
  if(com.length === 2){
    queue.push(com[1]);
  } else {
    if(com[0] === "size"){
      answer += queue.length+"\n";
      //break;
    } else {
      if(queue.length === 0){
        if(com[0] === "empty"){
          answer += "1\n";
          //console.log(1)
          //break;
        } else {
          answer += "-1\n";
          //console.log(-1)
          //break;
        }
      } else {
        if(com[0] === "empty"){
          answer += "0\n"
          //console.log(0);
          //break;
        } else if(com[0] === "front"){
          answer += queue[0]+"\n"
          //console.log(queue[0])
          //break;
        } else if(com[0] === "back"){
          answer += queue[queue.length-1]+"\n"
          //console.log(queue[queue.length-1])
          //break;
        } else if(com[0] === "pop"){
          answer += queue.shift()+"\n"
          //console.log(queue.shift());
          //break;
        }
      }
    }
  }
}
console.log(answer);