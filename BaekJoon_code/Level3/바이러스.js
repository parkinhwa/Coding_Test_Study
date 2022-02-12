// Set길이는 size
let arr = [[1, 2], [2, 3], [1, 5], [5, 2], [5, 6], [4, 7]]
let N = 7;
let M = 6;

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