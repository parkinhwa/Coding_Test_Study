// n을 k진수로 변환
// 0P0, 0P, P0, P 형태에 숫자 추출
// P가 소수인지 검사
// P에는 0이 들어가면 안됨

function solution(n, k) {
    let answer = 0;
    const changeNumber = n.toString(k).split("0")
    changeNumber.forEach((x) => {
        const num = Number(x)
        // console.log(num)
        let isP = true
        if(num === 0 || num === 1) isP = false
        if(num !== 2) {
            for(let i = 2; i < Math.sqrt(num)+1; i++) {
                if(x % i === 0) {
                    isP = false
                    break;
                }
            }   
        }
        if(isP) answer++;  
    })
    return answer;
}