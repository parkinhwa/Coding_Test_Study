// 검색어 찾는 문제....
// k 이상 검색되고 n일동안 연속 검색되야함 n일 동안 검색된 합이 n*k*2를 넘어야함 
// 다른 검색어가 같은 갯수로 검색되었다면 사전순으로 빠른거
// 다른 검색어가 다른 갯수로 검색되었다면 더 큰거
// 없으면 None
let research = ["aaaaabaa", "aaab", "fffaaaaa", "zabbbbbb"]
let n = 2;
let k = 2;
function solution(research, n, k) {
    var answer = [];
    let record = {};
    let arr = [];
    for(let i = 0; i < research.length; i++){
        let search_str = research[i].split("");
        for(let j = 0; j < search_str.length; j++){
            arr.push(search_str[j]);
        }
    }
    let set = new Set(arr);
    arr = Array.from(set);
    let count = Array.from(Array(arr.length), ()=>Array(arr.length).fill(0))
    for(let i = 0; i < research.length; i++){
        let search_str = research[i].split("");
        for(let j = 0; j < search_str.length; j++){
            record = getCount(search_str);
        }
        let keys = Object.keys(record)
        keys.forEach((x)=>{
            count[arr.indexOf(x)][i] = record[x];
        })
    }

    for(let i = 0; i < count.length; i++){
        let sum = 0;
        let day = 0;     
        for(let j = 0; j < count.length; j++){
            if(count[i][j] >= k){
                sum += count[i][j];
                day++;
            }
            if(day === n && sum >= 2*n*k){
                answer.push(arr[i]);
                day = 1;
                sum -= count[i][j-1];
            }
        }
    }
    answer = answer.sort();
    let ans_pro = getCount(answer);
    // console.log(ans_pro)
    let result = "";
    if(ans_pro.size === 1){
        result = answer[0];
    } else {
        let values = Object.values(ans_pro)
        let max = Math.max(...values);
        result = answer[values.indexOf(max)]
    }
    if(!result){
        result = "None";
    }
    return result;
}
function getCount(array) { return array.reduce((pv, cv)=>{ pv[cv] = (pv[cv] || 0) + 1; return pv; }, {}); }
// SimplePassword(str) 함수가 전달되는 str 매개 변수를 가져와서 제약 조건 목록을 따르는 유효한 암호로 전달되는지 확인합니다.

// 1. 반드시 대문자로 써야 해.
// 2. 하나 이상의 숫자를 포함해야 합니다.
// 3. 문장 부호 또는 수학 기호를 포함해야 합니다.
// 4. 문자열에는 "비밀번호"를 사용할 수 없습니다.
// 5. 7자 이상이고 31자 미만이어야 합니다.

// 위의 모든 제약 조건이 문자열 내에서 충족되면 프로그램은 문자열을 true로 반환해야 하며 그렇지 않으면 프로그램이 false로 반환해야 한다. 예를 들어, str이 "apple!M7" 이면"true"를 반환해야 합니다.

// function SimplePassword(str) { 

//   // code goes here
//   let answer = true;
//   let capital = /[A-Z]/g;
//   let num = /[0-9]/g;
//   let pun_mark = /[!|?|,|;|:|`|.]/g;
//   let math_mark = /[+|-|*|\/|%|=]/g;
//   let eng = "";
//   if(str.length >= 7 && str.length < 31){
//     if(str.match(capital) && str.match(num)){
//       if(str.match(pun_mark) || str.match(math_mark)){
//         str = str.split('');
//         for(let i = 0; i < str.length; i++){
//           if(str[i].match(/[a-zA-Z]/g)){
//             eng += str[i].toLowerCase();
//           }
//         }
//         if(eng.includes("password")){
//           answer = false;
//         }
//       } else {
//         answer = false;
//       }
//     } else {
//       answer = false;
//     }
//   } else {
//     answer = false;
//   } 
//   return answer; 

// }
   
// // keep this function call here 
// console.log(SimplePassword(readline()));