const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let n = Number(input.shift());
let person = [];
for(let i = 0; i < n; i++){
  person.push(input.shift().split(" "));
}


person = person.sort((a, b) => {
    a[0] = parseInt(a[0])
    b[0] = parseInt(b[0])
    if(a[0] === b[0]){ 
        return a[1] - b[1] 
    } else {
        return a[0] - b[0]; 
    }
    //return (a<b) ? -1 : ((a>b) ? 1 : 0);
});

for(let j = 0; j < person.length; j++){
  console.log(person[j][0]+" "+person[j][1])
}