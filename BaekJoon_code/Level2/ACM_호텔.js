const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")
let t = Number(input.shift());
for(let i = 0; i < t; i++){
  let [h, w, n] = input.shift().split(" ").map(Number);
  let answer = "";
  let answer_w = 1+parseInt(n/h);
  let answer_h = n%h;
  //console.log(answer_w, answer_h, n, h)
  if(n % h === 0){
    answer_h = h;
    answer_w--;
  } 
  if(answer_w > 9){
    answer = answer_h.toString()+answer_w.toString();
  } else {
    answer = answer_h.toString()+"0"+answer_w.toString();
  }
  console.log(answer)
}