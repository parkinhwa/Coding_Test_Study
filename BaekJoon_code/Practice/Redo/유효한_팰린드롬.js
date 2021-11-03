function solution(s){
  let answer = "YES";
  s = s.toLowerCase();
  let raw = [];
  for(let i = 0; i < s.length; i++){
      if(s[i].match(/[a-z]/g)){
        raw.push(s[i]);
    }
  }
  let rev = raw.reverse().join("");
  raw = raw.join("");
  if(rev != raw){
    answer = "NO"
  }
  return answer;
}
let s = "found7, time: study; Yduts; emit, 7Dunof"
console.log(solution(s))