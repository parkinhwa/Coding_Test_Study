function solution(board, moves){
  let stack = [];
  let answer = 0;
  for(let x of moves){
    for(var i = 0; i < board.length; i++){
      if(board[i][x-1] != 0) {
        stack.push(board[i][x-1]);
        board[i][x-1] = 0; 
        break;
      }
    }
    if(stack.length > 1){
      let a = stack.pop();
      let b = stack.pop();
      if(a == b) answer++;
      else {stack.push(b); stack.push(a);}
    }
  }
  return answer*2;
}
