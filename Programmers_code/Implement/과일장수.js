function solution(k, m, score) {
    let answer = 0;
    // 오름차순 정렬 후 앞에서부터 score.length % m 만큼 자른다.
    // => 가격이 낮고 한 박스를 채울 수 없는 사과들 버림
    const scoreCopy = score.slice().sort((a, b) => a - b).slice(score.length % m)
    for(let i = 0; i < scoreCopy.length; i+=m) {
        answer += scoreCopy[i] * m
    }
    return answer;
}