function solution(nums) {
    var answer = 0;
    let select = parseInt(nums.length/2);
    let set = new Set(nums);
    answer = [...set];
    if (select < answer.length){
        answer.length = select
    }
    return answer.length;
}
