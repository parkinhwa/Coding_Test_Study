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
  let sum = 1;
  keys.forEach((x)=> {
    sum *= clob[x].length + 1;
  })
  console.log(sum-1);
}
