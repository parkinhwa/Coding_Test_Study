// 내 풀이
function getByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}

function solution(s) {
    let numbermap = new Map(
        [
            [0, "zero"],
            [1, "one"],
            [2, "two"],
            [3, "three"],
            [4, "four"],
            [5, "five"],
            [6, "six"],
            [7, "seven"],
            [8, "eight"],
            [9, "nine"]
        ]
    )
    var answer = "";
    let string = "";
    for(let str of s){
        //console.log(string, answer)
        if(isNaN(str)){
            string += str;
            if([...numbermap.values()].includes(string)){
                string = getByValue(numbermap, string)
                answer += string;
                string = "";
            }
        } else {
            //console.log(str)
            answer += str;
            string = "";
            //console.log(answer)
        }
    }
    answer = parseInt(answer);
    return answer;
}

//다른 사람 풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
