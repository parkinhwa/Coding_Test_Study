function solution(arr){
  let answer = "";
  let ss = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[0].length; j++){
      for(let k = j+1; k < arr[0].length; k++){
        ss.push([arr[i][j], arr[i][k]]) 
      }
    }
  }
  ss = ss.reduce((pv, cv)=>{ pv[cv] = (pv[cv] || 0) + 1; return pv; }, {});
  let count = Object.values(ss);
  // console.log(count)
  for(let s = 0; s < count.length; s++){
    if(count[s] == arr.length){
      answer++;
    }
  }
  return answer;
}
let arr = [[3, 4, 1, 2],
           [4, 3, 2, 1],
           [3, 1, 4, 2]]

console.log(solution(arr));