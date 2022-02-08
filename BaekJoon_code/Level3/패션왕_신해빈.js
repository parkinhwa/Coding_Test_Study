let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const arrayToObject = (array) =>
array.reduce(
  (acc, row) => ((acc[row[1]] = [...(acc[row[1]] || []), row[0]]), acc),
  
  {}
);
let k = Number(input.shift());
for(let i = 0; i < k; i++){
  let n = Number(input.shift());
  let clothes = [];
  let clob = {};
  for(let j = 0; j < n; j++){
    clothes.push(input.shift().split(" "));
  }
  clob = arrayToObject(clothes);
  let keys = Object.keys(clob);
  let sum = 0, pro = 1;
  let answer = 0;
  if(keys.length === 1){
    answer = clob[keys].length;
  } else {
    keys.forEach((x)=>{
    sum += clob[x].length;
    // 경우의 수 구하는 방법을 생각중우우우우웅
    // pro
    })
    answer = sum + pro;
  }
  console.log(answer);
}