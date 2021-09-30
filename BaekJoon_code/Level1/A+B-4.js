const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")

for(let i = 0; i < input.length; i++){
  let ab = input[i].split(' ');
  console.log(Number(ab[0])+Number(ab[1]));
}
