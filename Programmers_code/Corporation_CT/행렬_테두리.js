function solution(rows, columns, queries) {
    const answer = [];
    const matrix = Array.from(Array(rows), () => new Array(columns));
    let number = 1;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            matrix[i][j] = number
            number++
        }
    }
    
    queries.forEach((query) => {
        let [x1, y1, x2, y2] = query
        x1--;
        y1--;
        x2--;
        y2--;
        let min = matrix[x1][y1]
        const temp = matrix[x1][y1]
        
        for(let i = x1; i < x2; i++) {
            matrix[i][y1] = matrix[i+1][y1];
            min = Math.min(matrix[i][y1], min)    
        }
        
        for(let i = y1; i < y2; i++) {
            matrix[x2][i] = matrix[x2][i+1];
            min = Math.min(matrix[x2][i], min)    
        }
        
      for (let i = x2; i > x1; i--) {
        matrix[i][y2] = matrix[i - 1][y2];
        min = Math.min(matrix[i][y2], min)    
      }

      for (let i = y2; i > y1; i--) {
        matrix[x1][i] = matrix[x1][i - 1];
        min = Math.min(matrix[x1][i], min)    
      }

      matrix[x1][y1+1] = temp;
      answer.push(min)
    })
    return answer;
}