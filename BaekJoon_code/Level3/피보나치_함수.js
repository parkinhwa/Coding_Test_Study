let input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);

let n = input.shift();

for(let i = 0; i < n; i++){
  let onecount = 0, zerocount = 1;
  for(let j = 1; j <= input[i]; j++){
    // console.log(j, zerocount, onecount)
    const tmpcount = zerocount;
    zerocount = onecount;
    onecount = tmpcount + onecount;
  }
  console.log(zerocount + " " + onecount); 
}

