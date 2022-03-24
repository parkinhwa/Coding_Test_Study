function solution(numbers) {
    let string = numbers.map(c=> c + '')
    let answer = string.sort((a,b) => (b+a) - (a+b)).join('');
    if(answer[0] === "0"){
        answer = "0"
    }
    return answer;
}