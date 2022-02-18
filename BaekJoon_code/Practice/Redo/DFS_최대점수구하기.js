function solution(m, arr){
  let answer = 0;
  let n = arr.length
  function DFS(L, sum, time){
    if(time > m) return;
    if(L === n){
      answer = Math.max(answer, sum)
    } else {
      DFS(L+1, sum+arr[L][0], time+arr[L][1])
      DFS(L+1, sum, time);
    }
  }
  DFS(0,0,0);
  return answer;
}
let m = 20;
let arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(m, arr));