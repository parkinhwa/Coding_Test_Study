function solution(c, arr){
  let answer = 0;
  function DFS(L, sum){
    if(sum > c) return;
    if(L === n){
      answer = Math.max(answer, sum);
    } else {
      // arr[L] 요소를 더했을 때
      DFS(L+1, sum+arr[L]);
      // arr[L] 요소를 안더했을 때
      DFS(L+1, sum);
    }
  }
  DFS(0,0);
  return answer;
}
let c = 259;
let n = 5;
let arr = [81, 58, 42, 33, 61];
console.log(solution(c, arr));