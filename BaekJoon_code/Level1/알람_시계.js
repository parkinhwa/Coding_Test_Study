const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(val=>+val)
let answer = [0, 0];

if(45 > input[1]){
  if(input[0] == 0){
    answer[0] = 23
  } else {
    answer[0] = input[0]-1
  }
  answer[1] = input[1]+15
} else {
  answer[0] = input[0]
  answer[1] = input[1]-45
}
console.log(answer.join(" "))