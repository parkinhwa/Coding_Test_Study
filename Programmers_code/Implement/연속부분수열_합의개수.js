function solution(elements) {
    let answer = 0;
    const n = elements.length
    const set = new Set()
    let count = 0;
    while(count < elements.length) {
        for(let i = 0; i < n; i++) {
            let num = i;
            let sum = elements[i];
            for(let j = 0; j < count; j++) {
                num++
                sum += elements[num % n]
            }
            set.add(sum)
        }
        count++
    }
    answer = [...set].length
    return answer;
}