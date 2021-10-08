let input = require('fs').readFileSync('/dev/stdin').toString().split("\n")

let n = input.shift()
let inset = new Map()

for(let i = 0; i < n; i++){
  inset.set(input[i], input[i].length)
}
const mapSort = new Map([...inset.entries()].sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))); // localeCompare 같은 길이의 단어

const arr = [...mapSort.keys()]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

