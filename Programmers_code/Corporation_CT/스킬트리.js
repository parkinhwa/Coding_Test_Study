let skill = "CBDK";
let skill_trees = ["CB", "CXYB", "BD", "AECD", "ABC", "AEX", "CDB", "CBKD", "IJCB", "LMDK"];

function solution(skill, skill_trees) {
    var answer = 0;
    for(let i = 0; i < skill_trees.length; i++){
      let arr = [];
      let str = skill_trees[i];
        for(let j = 0; j < str.length; j++){
          if(skill.includes(str[j])){
            arr.push(str[j]);
          }
        }
        arr = arr.join("")
        // console.log(skill.indexOf(arr))
        if(skill.indexOf(arr) == 0) {
          answer++;
        }
        
    }
    return answer;
}

console.log(solution(skill, skill_trees))