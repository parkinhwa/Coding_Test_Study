// 마지막 NaN 값을 추가하지않음
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(num => parseInt(num));

let N = input.shift();
input.sort((a, b)=>a-b);

//평균값
let avg = Math.round(input.reduce((acc, num) => (acc += num), 0) / N);

//중앙값
let mid = input[parseInt(N/2)];

// 최빈값
const count = {};

for (let num of input) {
  if (count[num]) {
    count[num] = count[num] + 1;
  } else {
    count[num] = 1;
  }
}

let modnum = Math.max.apply(null, Object.values(count));
let modArr = [];
let mod = 0;
for (let numKey in count) {
  if (count[numKey] === modnum) {
    modArr.push(numKey);
  }
}

if (modArr.length > 1) {
  modArr = modArr.sort((a, b) => a - b);
  mod = modArr[1];
} else {
  mod = modArr[0];
}
// 범위
let range = input[input.length-1]-input[0] 
console.log(avg+"\n"+mid+"\n"+mod+"\n"+range);

