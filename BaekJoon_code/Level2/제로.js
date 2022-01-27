const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);
let num = input.shift();
let stack = [];
for(let i = 0; i < num; i++){
  if(input[i] == 0){
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}
let answer = stack.reduce(function add(sum, cur){
  return sum+cur;
}, 0)

console.log(answer);