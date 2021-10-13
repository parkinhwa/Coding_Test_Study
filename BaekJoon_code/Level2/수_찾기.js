const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")

let n = input.shift()
let ans = input.shift().split(" ").map(Number).sort((a,b)=>a-b)
let m = input.shift()
let pro = input.shift().split(" ").map(Number)
let answer = ""

const binarySearch = (array, target, start, end) => {
  let mid = -1;
  while(start <= end) {
    mid = Math.floor((start+end)/2);
    if(array[mid] == target){
      return mid
    } else if(array[mid] > target){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1
}


  for(let i = 0; i < m; i++){
    if(binarySearch(ans, pro[i], 0, n-1) !== -1){
      answer += "1\n"
    } else {
      answer += "0\n"
    }
  }

console.log(answer)