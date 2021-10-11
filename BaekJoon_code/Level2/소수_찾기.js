const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")
let n = input.shift()
let arr = input[0].split(" ").map(Number)
let answer = 0;

for(let i = 0; i < n; i++){
  if(arr[i] == 1){
    arr.shift(i, 1)
    i--;
  }
  for(let j = 2; j <= Math.ceil(Math.sqrt(arr[i])); j++){
    if(arr[i] != 2 && arr[i]%j == 0){
      arr.shift(i, 1)
      i--;
      break;
    }
  }
}

console.log(arr.length)
