function solution(n, a, b)
{
    let answer = 1;
    
    if(a > b) {
        const temp = a
        a = b
        b = temp
    }
    
    while(Math.pow(2, answer) < n) {
        if(b % 2 === 0 && b - a === 1) {
            return answer;
        }
        
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        
        answer++
    }
    
    return answer;
}