let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let [n, k] = input.shift().split(" ").map(Number);

let count = 0;
for(let i = n-1; i > -1; i--){
  let money = Number(input[i])
  let sh = 0;
  if(money <= k){
    //console.log(money, k)
    sh = Math.floor(k / money);
    k = k - (sh * money);
    //console.log(money, sh, k);
  } else if(k < 0){
    break;
  }
  count += sh;
}

console.log(count);