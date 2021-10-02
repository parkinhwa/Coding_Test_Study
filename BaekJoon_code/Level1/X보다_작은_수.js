const input = require('fs').readFileSync('/dev/stdin').toString().replace("\n", " ").split(" ")
let n = input[0]
let max = input[1]

for(let i = 2; i < n+2; i++){
  if(input[i] < max){
    console.log(input[i])
  }
}