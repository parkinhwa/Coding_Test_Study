function solution(lottos, win_nums) {
    var answer = [];
    let grade = 7;
    let g_0 = 0;
    for(let i = 0; i < lottos.length; i++){
        if(win_nums.includes(lottos[i])){
            grade -= 1;
        } else if(lottos[i] == 0){
            g_0++;
        }
    }
    if(grade > 6){
        if(g_0 == 6){
            answer.push(grade-g_0, 6)
        } else {
            answer.push(6, 6)
        }
    } else {
        answer.push(grade-g_0, grade)
    }
    return answer;
}