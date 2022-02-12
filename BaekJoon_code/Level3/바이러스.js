// Set길이는 size
let arr = [[1, 2], [2, 3], [1, 5], [5, 2], [5, 6], [4, 7]]
let N = 7;
let M = 6;
function solution(n, graph) { 
  //방문노드 초기화 
  visited = new Array(n + 1).fill(false); 
  let result = 0; 
  //노드 1로 dfs시작 
  result = dfs(n, 1); 
  console.log(result); 
} 

function dfs(n, start) { 
  //현재 노드 방문처리 
  visited[start] = true; 
  let stack = []; 
  let cnt = 0; 
  //시작노드 삽입 
  stack.push(start); 
  while (stack.length !== 0) { 
    let tmp = stack.pop(); 
    //연결된 인접노드 가져옴 
    for (let i = 1; i <= n; i++) { 
      //현재 노드와 연결된것이 있고 그 연결노드가 아직 미방문이면 
      if (graph[tmp][i] === 1 && visited[i] === false) { 
        stack.push(i); //인접노드 삽입 
        cnt += 1; // 감염수 
        visited[i] = true; //인접노드 방문처리 
        } 
      } 
    } 
  return cnt; 
}

// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

// let N = Number(input.shift());
// let M = Number(input.shift());

// let arr = [];
// for(let i = 0; i < M; i++){
//   arr.push(input[i].split(" ").map(Number));
// }
// let answer=0;
// let graph=Array.from(Array(N+1), ()=>Array(N+1).fill(0));
// let ch=Array.from({length:N+1}, ()=>0);
// let path=[];
// function solution(N, arr){  
//     for(let [a, b] of arr){
//         graph[a][b]=1;
//         graph[b][a]=1;
//     }
//     function DFS(v){
//       for(let i=1; i<=N; i++){
//         if(graph[v][i]===1 && ch[i]===0){
//           // console.log(v, i);
//           ch[i]=1;
//           path.push(i);
//           DFS(i);
//           ch[i]=0;
//         }
//       }
//     }
//     path.push(1);
//     ch[1] = 1;
//     DFS(1);
//     path = Array.from(new Set(path))
//     answer = path.length-1;
//     return answer;
// }

// console.log(solution(N, arr));