let str = "12"
let s = ["+", "-", "/", "*"]
let answer = [];

let [a, b] = str.split("").map(Number)

for(let i = 0; i < s.length; i++){
  if(s[i] == "+"){
    answer.push(a+b);
  } else if(s[i] == "-"){
    answer.push(a-b);
  } else if(s[i] == "/"){
    answer.push(a/b);
  } else {
    answer.push(a*b);
  }
}
console.log(answer)