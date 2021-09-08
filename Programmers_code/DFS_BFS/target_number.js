function solution(numbers, target) {
    let answer = 0;
    let count = 0;
    let n = numbers.length;
    function DFS(L, count){
        if(L > n) return;
        if(L == n && count == target) {
            answer += 1;
        }else{
            DFS(L+1, count+numbers[L]);
            DFS(L+1, count-numbers[L]);
        }
        
    }
    DFS(0, count);
    return answer;
}
