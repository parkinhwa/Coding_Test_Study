const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let n = Number(input.shift());
let arr = input.shift().split(" ").map(Number);

let m = input.shift();
let ans = input.shift().split(" ").map(Number);
const dict = {};
arr.forEach((v) => {
  if(dict[v]){
    dict[v]++;
  } else {
    dict[v] = 1;
  }
  //console.log(dict[v], v)
})
const result = [];
ans.forEach((v) => {
  result.push(dict[v] ? dict[v] : 0)
})
console.log(result.join(" "))
// let result = [];
// for(let i = 0; i < m; i++){
//   let answer = 0;
//   for(let j = 0; j < n; j++){
//     if(ans[i] === arr[j]){
//       answer++;
//     }
//   }
//   result.push(answer);
// }
// console.log(result.join(" "))