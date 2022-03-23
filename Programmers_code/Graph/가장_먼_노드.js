function solution(n, edge) {
  const graph = Array.from(Array(n+1), () => []);
  for(const [src, dest] of edge){
    graph[src].push(dest);
    graph[dest].push(src);
  }
  // console.log(graph)
  const distance = Array(n+1).fill(0);
  distance[1] = 1;

  //BFS
  const queue = [1];
  while(queue.length > 0){
    const src = queue.shift(); // shift는 O(n)이지만 요소가 적을 경우 자바스크립트 엔진에서 최적화해줌
    for(const dest of graph[src]){  
      // console.log(dest, graph[src], distance[dest]);      
      if(distance[dest] === 0){
        // console.log(dest, src) // src가 부모 dest는 자식들
        queue.push(dest);
        distance[dest] = distance[src] + 1;
        // console.log(distance)
      }    
    } 
  }
  const max = Math.max(...distance);
  return distance.filter(item => item === max).length;
}
let n = 6;
let edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	
console.log(solution(n, edge));