const input = require('fs').readFileSync('/dev/stdin').toString().split(" ");

let [x, y, w, h] = input
let answer = Math.min(w-x, h-y, x, y)
console.log(answer)