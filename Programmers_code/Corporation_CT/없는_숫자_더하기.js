function solution(numbers) {
    var answer = 0;
    for(let j = 0; j < 10; j++){
        if(!numbers.includes(j)){
            answer += j
        }
    }
    return answer;
}