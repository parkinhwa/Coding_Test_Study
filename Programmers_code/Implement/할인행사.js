// 배열에서 중복값 세는 함수
function getCount(array) { 
    return array.reduce((pv, cv) => { 
        pv[cv] = (pv[cv] || 0) + 1; 
        return pv; 
    }, {}); 
}

function solution(want, number, discount) {
    let answer = 0;
    for(let i = 0; i < discount.length-9; i++) {
        const arr = [];
        // 열흘간 할인 품목 배열에 추가, 품목 빈도수 세기
        for(let j = i; j < i+10; j++) {
            arr.push(discount[j])   
        }
        const countObj = getCount(arr)
        // 사고싶은 품목과 할인 품목이 일치하는지 검사
        for(let k = 0; k < want.length; k++){
            if(countObj[want[k]]) {
                if(countObj[want[k]] < number[k]) {
                    break;
                } 
                if(k === want.length-1) {
                    answer++;
                }   
            } else {
                break;
            }
        }
    }
    return answer;
}