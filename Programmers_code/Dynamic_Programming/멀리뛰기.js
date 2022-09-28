function solution(n) {
    let answer = 0;
    const dp = Array.from({length: n}, () => 0)
    
    dp[0] = 1
    
    for(let i = 1; i < n; i++) {
        if(i === 1) dp[i] = 2
        else dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    }
    
    answer = dp[dp.length-1]
    return answer;
}