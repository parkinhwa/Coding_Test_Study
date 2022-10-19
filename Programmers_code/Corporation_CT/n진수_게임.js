function solution(n, t, m, p) {
    let answer = '';
    const numbers = [];
    for(let i = 0; i <= t*m; i++) {
        numbers.push(...i.toString(n).split(""))
    }
    
    for(let j = p; j <= t*m; j+=m) {
        answer += numbers[j-1].toUpperCase()
    }
    
    return answer;
}