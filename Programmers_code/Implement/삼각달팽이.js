function solution(n) {
  const answer = [];
  const arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
  let count = 0;
  let x = -1;
  let y = 0;
  let sum = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) {    
      x++;
      count++;
      arr[x][y] = count;
    }
    for (let i = 0; i < n-1; i++) {
      y++;
      count++;
      arr[x][y] = count;
    }
    for (let i = 0; i < n-2; i++) {
      x--;
      y--;
      count++;
      arr[x][y] = count;
    }
    n -= 3
  }
    
  for(let i = 0; i < arr.length; i++) {
    answer.push(...arr[i])  
  }

  return answer;
}