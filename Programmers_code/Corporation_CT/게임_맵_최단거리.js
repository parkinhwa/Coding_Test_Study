function solution(maps) {
    let answer = 1;
    let visited = maps;
    let queue = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const n = maps.length;
    const m = maps[0].length;
    
    queue.push([0, 0]);
    visited[0][0] = 0;
    
    while(queue.length > 0) {
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            
            for(let j = 0; j < 4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                // console.log(x, y, nx, ny, j)
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                    if(nx == n - 1 && ny == m - 1) {
                        return ++answer;
                    }
                    console.log(answer,"\n", visited)
                    queue.push([nx, ny]);
                    visited[nx][ny] = 0;
                }
            }
        }
        answer++;
    }
    
    return -1;
}
let arr = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
let arr2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]
console.log(solution(arr))