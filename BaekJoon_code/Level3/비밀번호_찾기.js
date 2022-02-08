let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let site = [];
for(let i = 0; i < N; i++){
  site.push(input[i].split(" "));
}
const arrayToObject = (array) =>
array.reduce(
  (acc, row) => ((acc[row[0]] = [...(acc[row[0]] || []), row[1]]), acc),
  {}
);
let siteob = {};
siteob = arrayToObject(site);
console.log(siteob)
let answer = "";
for(let j = 0; j < M; j++){
  answer += siteob[input[j+N]]+"\n";
}
console.log(answer);