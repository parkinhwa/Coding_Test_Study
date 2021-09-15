function solution(clothes) {
    var answer = 1;
    let set = {};
    for(let i = 0; i < clothes.length; i++){
        //console.log(clothes); // heargear가 2개 eyewear가 1개
        set[clothes[i][1]] = (set[clothes[i][1]] || 1) + 1;
        //console.log(set); // { headgear: 3, eyewear: 2 } 안쓴 경우를 포함
    }
    for(let key in set){
        answer *= set[key];
    }
    return answer-1; // 아무것도 안쓴 경우를 제외함
}
