// includes보다 Set을 이용한 has가 더 빠르다!
let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = ['3 4', 'ohhenrie', 'charlie', 'baesangwook', 'obama', 'baesangwook', 'ohhenrie', 'clinton'];

let [N, M] = input.shift().split(" ").map(Number);
let hear = new Set(input.slice(0, N));
let answer = [];

for(let i = 0; i < M; i++){
  let watch = input[i+N];
  if(hear.has(watch)){
    answer.push(watch);
  }
}
answer.sort();
console.log(answer.length);
for(let ans of answer){
  console.log(ans);
}
