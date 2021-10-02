const input = require('fs').readFileSync("/dev/stdin").toString();
let answer = Array.from({length:26}, ()=>-1) 
let arr = input.split("");

for(let i = 0; i < arr.length; i++){
  if(answer[input[i].charCodeAt(0)-97] == -1){
    answer[input[i].charCodeAt(0)-97] = i
  }
}

console.log(answer.join(' '));
