function solution(babbling) {
    let answer = 0;
    let reg = /aya|ye|woo|ma/g
    babbling.forEach((bab) => {
        const matches = bab.match(reg)
        const str = bab.replace(reg, '')
        if(str === '') {
            let conti = true
            for(let i = 0; i < matches.length-1; i++) {
                if(matches[i] === matches[i+1]) {
                    conti = false
                    break
                }
            }
            if(conti) answer++
        }
    })
    return answer;
}