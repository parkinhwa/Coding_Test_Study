const [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

let answer = [];
const arr = Array.from({length:n}, (v, i) => i+1);

while(arr.length > 0){
  for(let j = 0; j < k-1; j++){
    //const num = arr.shift();
    arr.push(arr.shift());
  }
  //const num = arr.shift();
  answer.push(arr.shift());
}
console.log(`<${answer.join(", ")}>`);

