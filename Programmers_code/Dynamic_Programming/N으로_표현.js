//⚙︎ = +, *, -, /

//dp[1] = [N]
//dp[2] = dp[1] ⚙︎ dp[1]
//dp[3] = dp[1] ⚙︎ dp[2], dp[2] ⚙︎ dp[1]
//dp[4] = dp[1] ⚙︎ dp[3], dp[2] ⚙︎ dp[2], dp[3] ⚙︎ dp[1]
//dp[5] = dp[1] ⚙︎ dp[4], dp[2] ⚙︎ dp[3], dp[3] ⚙︎ dp[2], dp[4] ⚙︎ dp[1]
//dp[6] = dp[1] ⚙︎ dp[5], dp[2] ⚙︎ dp[4], dp[3] ⚙︎ dp[3], dp[4] ⚙︎ dp[2], dp[5] ⚙︎ do[1]
//dp[7] = dp[1] ⚙︎ dp[6], dp[2] ⚙︎ dp[5], dp[3] ⚙︎ dp[4], dp[4] ⚙︎ dp[3], dp[5] ⚙︎ do[2], dp[6] ⚙︎ do[1]
//dp[8] = dp[1] ⚙︎ dp[7], dp[2] ⚙︎ dp[6], dp[3] ⚙︎ dp[5], dp[4] ⚙︎ dp[5], dp[5] ⚙︎ do[3], dp[6] ⚙︎ do[2], dp[7] ⚙︎ do[1]

function solution(N, number) {
    const dy = new Array(9).fill(0).map(el => new Set());
    for(let i = 1; i < 9; i++){
        dy[i].add('1'.repeat(i) * N);
        for(let j = 1; j < i; j++){
            for(const a of dy[j]){
                for(const b of dy[i-j]){
                    dy[i].add(a+b);
                    dy[i].add(a-b);                    
                    dy[i].add(a*b);
                    dy[i].add(Number(a/b));
                }
            }
        }
        if(dy[i].has(number)) return i;
    }
    return -1;
}
