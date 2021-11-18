let [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number).sort((a, b) => b-a);

function gcd(a, b){
  while(b > 0){
    let temp = b;
    b = a%b;
    a = temp
  }
  return a;
}
let max_remain = gcd(a, b)
let min_remain = a*b/max_remain;

console.log(gcd(a, b))
console.log(min_remain)