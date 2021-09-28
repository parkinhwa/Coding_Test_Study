const fs = require('fs')
const input = fs.readFileSync("/dev/stdin").toString().toUpperCase().trim().split('')

// 중복 횟수 세기, 중복값 제거
function getCount(array) { return array.reduce((pv, cv) => { pv[cv] = (pv[cv] || 0) + 1; return pv; }, {}); }

function solution(input) {
  let strset = getCount(input)
  let strsort = Object.entries(strset).sort(([, a], [, b]) => b - a);
  
  if(strsort.length > 1 && strsort[0][1] == strsort[1][1]){
    return "?" 
  } else {
    return strsort[0][0]
  }

}
solution(input)