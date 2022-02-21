let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let [h, m] = input.shift().split(" ").map(Number);
let time = Number(input[0]);

if(m+time >= 60){
  h += parseInt((m+time)/60); 
  m = (m+time)%60; 
} else {
  m += time;
}

if(h >= 24){
  h = h - 24;
}

console.log(h, m);
