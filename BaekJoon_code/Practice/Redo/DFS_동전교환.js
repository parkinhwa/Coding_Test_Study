function solution(m, arr){
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(L, sum){
    if(sum > m) return;
    // 현재 최솟값보다 큰 값은 굳이 검사할 필요가 없음
    if(L >= answer) return;
    if(sum === m){
      answer = Math.min(answer, L);
    } else {
      for(let i = 0; i < n; i++){
        DFS(L+1, sum+arr[i]);
      }
    }
  }
  DFS(0,0);
  return answer;
}
let n = 3;
let arr = [1, 2, 5]
let m = 15;
console.log(solution(m, arr));