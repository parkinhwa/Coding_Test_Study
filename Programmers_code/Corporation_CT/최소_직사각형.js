function solution(sizes) {
    var answer = 0;
    let temp = 0;
    let max1 = 0;
    let max2 = 0;
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            temp = sizes[i][0]
            sizes[i][0] = sizes[i][1]
            sizes[i][1] = temp
        }
        if(max1 < sizes[i][0]){
            max1 = sizes[i][0]
        }
        if(max2 < sizes[i][1]){
            max2 = sizes[i][1]
        }
    }
    answer = max1 * max2
    return answer;
}