function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false)
    
    function DFS(k, cnt) {
        answer = Math.max(answer, cnt)
        for(let i = 0; i < dungeons.length; i++) {
            const [minK, useK] = dungeons[i]
            // console.log(i, dungeons[i], k, cnt, visited)
            if(k >= minK && !visited[i]) {
                visited[i] = true;
                DFS(k - useK, cnt + 1)
                visited[i] = false
            }
        }
    } 
    
    DFS(k, answer)
    
    return answer;
}