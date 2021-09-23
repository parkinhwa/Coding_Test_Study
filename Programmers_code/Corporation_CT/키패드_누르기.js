function solution(numbers, hand) {
    var answer = '';
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]]
    let ans = []
    let ldis = 0
    let rdis = 0
    let lpo = [3, 0]
    let rpo = [3, 2]
    if (hand == "right"){
        hand = 'R'   
    }
    else{
        hand = 'L'
    }
    for (let i = 0; i < numbers.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (numbers[i] == arr[j][0]){
                ans.push('L')
                lpo = [j, 0]
            }
            else if (numbers[i] == arr[j][2]){
                ans.push('R')
                rpo = [j, 2]
            }
            else if (numbers[i] == arr[j][1]){
                ldis = Math.abs(lpo[0]-j)+Math.abs(lpo[1]-1)
                rdis = Math.abs(rpo[0]-j)+Math.abs(rpo[1]-1)
                if (ldis > rdis){
                    ans.push('R')
                    rpo = [j, 1]
                }
                else if (rdis > ldis){
                    ans.push('L')
                    lpo = [j, 1]
                }
                else if (rdis == ldis){
                    ans.push(hand)
                    if (hand == 'R'){
                        rpo = [j, 1]
                    }
                    else{
                        lpo = [j, 1]
                    }
                }
            }
        }
     }
    answer = ans.join('');
    return answer;
}
