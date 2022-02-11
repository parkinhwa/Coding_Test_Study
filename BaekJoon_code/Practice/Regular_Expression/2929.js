let input = require('fs').readFileSync('/dev/stdin').toString();

let process = input;

let machine = [];
let j = 0;
let count = 0;
for(let i = 0; i < process.length-1; i++){
  // console.log(j, process[i])
  if(j % 4 === 0 && process[i].match(/[A-Z]/)){
    machine.push(process[i]);
  } else if(process[i].match(/[a-z]/)){
    machine.push(process[i]);
  } else {
    count++;
    machine.push("NOP");
    i--;
  }
  j++;
}
console.log(count);

