function solution(X, Y) {
    let answer = '';
    const number = {}
    const twinNumber = []

    for(const num of X) {
        number[num] = (number[num] || 0) + 1
    }
    
    for(const num of Y) {
        if(number[num]) {
            twinNumber.push(num)
            number[num]--;
        }
    }
    
    answer = twinNumber.length > 0 ? twinNumber.sort((a, b) => b - a).join("") : '-1'
  
    if(answer.match(/[^0]/g) === null) answer = "0"
    
    return answer;
}