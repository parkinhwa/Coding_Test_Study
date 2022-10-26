function solution(m, n, board) {
    let answer = 0;
    for(let i = 0; i < m; i++) {
        board[i] = board[i].split("")
    }
    
    // 2차원 배열에서 깊은 복사하는 법
    const deleteBoard = board.map((v) => v.slice())
    for(let k = 0; k < m*n/4; k++) {
      for(let i = 0; i < m-1; i++) {
        for(let j = 0; j < n-1; j++) {
            // 4개가 반복하는 블록들 없앤다는 의미로 #을 넣어줌
						// X로 넣었더니 테케 9번 실패 알파벳으로 하면 안된다.
            if(board[i][j] === board[i+1][j] && board[i][j] === board[i][j+1] && board[i][j] === board[i+1][j+1]) {
                    deleteBoard[i][j] = '#'
                    deleteBoard[i+1][j] = '#'
                    deleteBoard[i][j+1] = '#'
                    deleteBoard[i+1][j+1] = '#'
                }
            }
        }
				
				// deleteBoard에 행 추출하여 #을 앞으로 빼고 남은 알파벳들을 뒤로 보낸다.
        for(let j = 0; j < n; j++) {
            const block = []
            for(let i = 0; i < m; i++) {
                if(deleteBoard[i][j] === '#') {
                    block.unshift('#')
                } else {
                    block.push(deleteBoard[i][j])
                }
            }
            for(let i = 0; i < m; i++) {
                deleteBoard[i][j] = block[i]
            }
        }
        // 얕은 복사했더니 테케 10번, 11번 실패
        // 깊은 복사 해야함 
        board = deleteBoard.map((v) => v.slice()) 
    }

    // 완성된 블록 배열에 삭제된 블록 개수 세기
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(deleteBoard[i][j] === '#') answer++
        }
    }
    
    return answer;
}