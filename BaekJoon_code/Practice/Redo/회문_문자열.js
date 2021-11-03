function solution(s){
  answer = "YES"
  s = s.toLowerCase()
  let reverse = s.split("").reverse().join("");
  if(s != reverse){
    answer = "NO"
  }
  return answer;
}
let str = "goolG"
console.log(solution(str));

