function solution(food) {
    let answer = '';
    let order = '';
    for(let i = 1; i < food.length; i++) {
        order += i.toString().repeat(Math.floor(food[i]/2));
    }
    const reverse = order.split("").reverse().join("");
    answer = order + '0' + reverse;
    return answer;
}