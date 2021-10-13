const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")

let [k, n] = input.shift().split(" ")
let arr = input.map(Number).sort((a,b)=>a-b)
let sum = arr.reduce((a,b)=>a+b, 0);

let max = parseInt(sum/n)
let min = 1;
let answer = 0;

while(min <= max){
  let mid = parseInt((max+min)/2)
  let count = 0;
  input.forEach(a => {
    count += parseInt(a / mid)
  })
  if(count >= n){
    min = mid + 1
    if(answer < mid) answer = mid
  } else {
    max = mid - 1
  }
}

console.log(answer)
