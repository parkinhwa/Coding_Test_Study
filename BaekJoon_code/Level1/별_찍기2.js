let input = require('fs').readFileSync('/dev/stdin').toString();
let star = Array.from({length:input}, ()=>" ")
for(let i = Number(input)-1; i > -1; i--){
  star[i] = "*"
  console.log(star.join(""))
}