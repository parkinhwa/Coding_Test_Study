const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")

for(let i = 1; i <= input[0]; i++){
  let ab = input[i].split(' ');
  console.log(Number(ab[0])+Number(ab[1]));
}
