function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        let ans = numbers[i]+1;
        num = num.toString(2);
        let bit = 1;
        while(true){
          bit = 1;
          for(let j = 0; j < num.length; j++){
              ans = ans.toString(2);
              if(num[num.length-j-1] != ans[ans.length-j-1]){
                  bit++;
              }
          }
          console.log(Number.parseInt(num, 2), Number.parseInt(ans, 2), bit)
          if(bit > 0 && bit <= 2){
              answer.push(Number.parseInt(ans, 2));
              break;
          } else {
              ans = Number.parseInt(ans, 2) + 1;
          }
        }
    }
    return answer;
}

console.log(solution([2, 7]))