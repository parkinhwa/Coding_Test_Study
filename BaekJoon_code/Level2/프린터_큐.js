const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")
let n = input.shift()

for(let i = 0; i < n; i++){
  let [n, m] = input.shift().split(" ").map(Number)
  let queue = input.shift().trim().split(" ").map(Number)
  let max = Math.max(...queue)
  let queue_index = [];
  let answer = 0;

  for(let j = 0; j < queue.length; j++){
    queue_index.push(j)
  }

  while(queue.length > 0){
    if(max > queue[0]){
      queue.push(queue.shift())
      queue_index.push(queue_index.shift())
    } else if(max == queue[0]){
      answer++;
      if(m == queue_index[0]){
        console.log(answer)
        break;
      } else {
        queue.shift();
        queue_index.shift();
      }
      max = Math.max(...queue)
    }
  }
}