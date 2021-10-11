const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number)

let n = input[0]
let stack = []
let i = 1;
let j = 1;
let answer = ""

while(j <= n){
  if(stack[stack.length-1] == input[j]){
    stack.pop()
    j++;
    i--;
    answer += "-\n"
  } else {
    stack.push(i)
    answer += "+\n"
  }
  i++;
  if(stack.length > n){
    answer = "NO"
    break;
  }
}

console.log(answer);

