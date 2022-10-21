function solution(a, b, n) {
    let answer = 0;
    let emptyBottle = n;
    while(emptyBottle >= a) {
        let bottle = Math.floor(emptyBottle / a) * b
        emptyBottle = bottle + (emptyBottle % a)
        answer += bottle
        console.log(bottle, emptyBottle, answer)
    }
    
    return answer;
}