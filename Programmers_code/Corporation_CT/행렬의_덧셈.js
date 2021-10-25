let arr1 = [[1, 2], [2, 3]]
let arr2 = [[3, 4], [5, 6]]
function solution(arr1, arr2) {
    var answer = [[]];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}

console.log(solution(arr1, arr2))