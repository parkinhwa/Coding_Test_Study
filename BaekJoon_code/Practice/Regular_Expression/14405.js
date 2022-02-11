let input = require('fs').readFileSync('/dev/stdin').toString();

let pikachu = /pi|ka|chu/g;
let str = input.replace(pikachu, '');
str = str.replace("\n", '');
if(str){
  console.log("NO");
} else {
  console.log("YES");
}


