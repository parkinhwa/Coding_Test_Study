function solution(board)
{
    var answer = 0;
    let max = 0;
    if(board.length < 2 || board[0].length < 2){
        return 1;
    }
    for(let i = 1; i < board.length; i++){
        for(let j = 1; j < board[0].length; j++){
            if(board[i][j] == 1){
                let min = Math.min(board[i-1][j-1], board[i][j-1], board[i-1][j])
                board[i][j] = min+1;
                if(answer < board[i][j]){
                    answer = board[i][j]   
                }                
            }
        }
    }
    return answer*answer;
}