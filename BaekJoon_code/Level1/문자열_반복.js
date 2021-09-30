const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

const num = input.shift(); // 한줄

for(let i = 0; i < num; i++){
  let answer = "";
  const[n, s] = input[i].split(" ")
  for(let j = 0; j < s.length; j++){
    answer += s[j].repeat(n)
  }
  console.log(answer);
}