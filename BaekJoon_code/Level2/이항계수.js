const [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

let answer = fac(n)/(fac(n-k)*fac(k));
// console.log(fac(n), fac(n-k), fac(k))
console.log(answer);

function fac(num){
  let sum = num;
  if(sum === 1 || sum == 0){
    return 1;
  } else {
    while(num > 1){
      num--;
      sum *= num; 
    }
    return sum;
  }
}
