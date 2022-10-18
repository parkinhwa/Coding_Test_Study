function solution(number) {
    let answer = 0;
    
    function DFS(v, sum, idx) {
        if(v === 3) {
            if(sum === 0) answer++;
            return; 
        } else {
            for(let i = idx; i < number.length; i++) {
                DFS(v+1, sum+number[i], i+1)
            }
         }
    }
    
    DFS(0, 0, 0)
    return answer;
}