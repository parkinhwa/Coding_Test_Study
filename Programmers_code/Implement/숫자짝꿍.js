function solution(X, Y) {
    let answer = '';
    const number = Array.from(Array(10).fill(0))
    const twinNumber = []
    
    for(let i = 0; i < X.length; i++) {
        number[X[i]] += 1
    }
    
    for(let j = 0; j < Y.length; j++) {
        if(number[Y[j]] > 0) {
            twinNumber.push(Y[j])
            number[Y[j]] -= 1
        }
    }

    answer = twinNumber.length > 0 ? twinNumber.sort((a, b) => b - a).join("") : '-1'
    if(answer === '') answer = "-1"
    else if(Number(answer) === 0) answer = "0"
    
    return answer;
}