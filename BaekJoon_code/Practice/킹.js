// 아 런타임 에러 왜 나지
const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let array = Array.from(Array(8), ()=>Array(8).fill(0))
let [king, stone, n] = input.shift().split(" ")
let [k_co, k_ro] = king.split("");
let [s_co, s_ro] = stone.split("");
n = Number(n);
k_ro = Number(Math.abs(k_ro-8))
k_co = Number(k_co.charCodeAt(0)-65)
s_ro = Number(Math.abs(s_ro-8))
s_co = Number(s_co.charCodeAt(0)-65)
// console.log(k_ro, k_co, s_ro, s_co)
array[k_ro][k_co] = 1;
array[s_ro][s_co] = 2;

// console.log(array);
// console.log(array[8][8])
for(let i = 0; i < n; i++){
  let position = input.shift();
  // console.log(position)
  if(k_ro < 8 && k_co < 8 && s_ro < 8 && s_co < 8 && k_ro > -1 && k_co > -1 && s_ro > -1 && s_co > -1){
    if(k_co < 7 && position == "R"){
      if(array[k_ro][k_co+1] == 2){
        if(s_co > 7){
          break;
        }
        array[k_ro][k_co+1] = 0;
        array[s_ro][s_co+1] = 2;
        s_co = s_co+1;
      }
      array[k_ro][k_co] = 0;
      array[k_ro][k_co+1] = 1;
      k_co = k_co+1;
    } else if (0 < k_co && position == "L"){
        if(array[k_ro][k_co-1] == 2){
          if(1 > s_co){
            break;
          }
          array[k_ro][k_co-1] = 0;
          array[s_ro][s_co-1] = 2;
          s_co = s_co-1;
          }
        array[k_ro][k_co] = 0;
        array[k_ro][k_co-1] = 1;
        k_co = k_co-1;
    } else if (k_ro < 7 && position == "B"){
        if(array[k_ro+1][k_co] == 2){
            if(s_ro > 7){
              break;
            }
            array[k_ro+1][k_co] = 0;
            array[s_ro+1][s_co] = 2;
            s_ro = s_ro;
          }
        array[k_ro][k_co] = 0;
        array[k_ro+1][k_co] = 1;
        k_ro = k_ro+1;
    } else if (1 < k_co && 1 < s_co && position == "T"){
        if(array[k_ro][k_co] == 2){
            if(1 > s_ro){
              break;
            }
            array[k_ro-1][k_co] = 0;
            array[s_ro-1][s_co] = 2;
            s_ro = s_ro-1;
          }
        array[k_ro][k_co] = 0;
        array[k_ro-1][k_co] = 1;
        k_ro = k_ro-1;
    } else if (k_ro < 7 && 1 < k_co && position == "RT"){
        if(array[k_ro-1][k_co+1] == 2){
          if(s_ro < 1 || 7 < s_co){
            break;
          }
            array[k_ro-1][k_co+1] = 0;
            array[s_ro-1][s_co+1] = 2;
            s_ro = s_ro-1;
            s_co = s_co+1;
          }
        array[k_ro][k_co] = 0;  
        array[k_ro-1][k_co+1] = 1;
        k_ro = k_ro-1;
        k_co = k_co+1;
    } else if (1 < k_ro && 1 < k_co && position == "LT"){
        if(array[k_ro-1][k_co-1] == 2){
          if(1 > s_ro || 1 > s_co){
            break;
          }
            array[k_ro-1][k_co-1] = 0;
            array[s_ro-1][s_co-1] = 2;
            s_ro = s_ro-1;
            s_co = s_co-1;
          }
        array[k_ro][k_co] = 0;
        array[k_ro-1][k_co-1] = 1;
        k_ro = k_ro-1;
        k_co = k_co-1;
    } else if (k_ro < 7 && k_co < 7 && position == "RB"){
        if(array[k_ro+1][k_co+1] == 2){
          if(s_co > 7 || s_ro > 7){
            break;
          }
            array[k_ro+1][k_co+1] = 0;
            array[s_ro+1][s_co+1] = 2;
            s_ro = s_ro+1;
            s_co = s_co+1;
          }
          array[k_ro][k_co] = 0;
          array[k_ro+1][k_co+1] = 1;
          k_ro = k_ro+1;
          k_co = k_co+1;
    } else if (k_ro < 7 && k_co > 0 && position == "LB"){
        if(array[k_ro+1][k_co-1] == 2){
          if(s_ro > 7 || s_co < 1){
            break;
          }
            array[k_ro+1][k_co-1] = 0;
            array[s_ro+1][s_co-1] = 2;
            s_ro = s_ro+1;
            s_co = s_co-1;
          }
        array[k_ro][k_co] = 0;
        array[k_ro+1][k_co-1] = 1;
        k_ro = k_ro+1;
        k_co = k_co-1;
    }
  }
}
// console.log(array);
k_ro = Number(Math.abs(k_ro-8))
k_co = String.fromCharCode(k_co+65)
s_ro = Number(Math.abs(s_ro-8))
s_co = String.fromCharCode(s_co+65)
console.log(k_co+k_ro)
console.log(s_co+s_ro)
