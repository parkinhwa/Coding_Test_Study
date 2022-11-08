// 구현중..
function solution(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i
    }
    const answer = Array.from(Array(sum).fill(0));
    const array = Array.from({ length: n }, () => [])
    
    let count = 1;
    let start = 0;
    
    while(true) {
        if(count >= sum) return;
        const end = n - start
        console.log(start, end);
        
        for(let i = start; i < end; i++) {
            array[i].push(count);
            count++;
        }

        for(let k = 0; k < end-2; k++) {
            array[end-1].push(count)
            count++;
        }

        for(let j = end-1; j > start; j--) {
            array[j].push(count);
            count++;
        }
        start++;
        console.log(array)
    }

    console.log(array)
    
    return answer;
}