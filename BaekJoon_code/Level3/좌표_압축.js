let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = ['5', '2 4 -10 4 -9'];
let n = Number(input.shift());
let arr = input[0].split(" ").map(Number);
let sortarr = input[0].split(" ").map(Number).sort((a, b)=>a-b);
// 중복제거
let deparr = new Set(sortarr);
deparr = Array.from(deparr);
// 정렬 순서를 key로 하고 원래 값을 value로 함
let ob = {};
for(let i = 0; i < deparr.length; i++){
  ob[deparr[i]] = i;
}
// 원래 값으로 정렬 순서값 불러옴
let answer = "";
arr.forEach((x) => {
  answer += ob[x]+" ";
})
console.log(answer);

