const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let n = Number(input.shift());
for(let i = 0; i < n; i++){
  let stack = [];
  let answer = "YES"
  let arr = input.shift().split("");
  for(let j = 0; j < arr.length; j++){
    if(arr[j] === "("){
      stack.push(arr[j]);
    } else {
      if(stack.length === 0){
        answer = "NO"
        break;
      } else {
        stack.pop()
      }
    }
  }
  if(stack.length != 0){
    answer = "NO"
  }
  console.log(answer)
}