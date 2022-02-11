let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
// let input = ['Marlin names this last egg Nemo, a name that Coral liked.', 'While attempting to save nemo, Marlin meets Dory,', 'a good-hearted and optimistic regal blue tang with short-term memory loss.', 'Upon leaving the East Australian Current,(888*%$^&%0928375)Marlin and Dory', 'NEMO leaves for school and Marlin watches NeMo swim away.', 'EOI']

// 대소문자 구분없이 찾기 //i
let nemo = /nemo/i;
for(let i = 0; i < input.length; i++){
  if(input[i] === "EOI"){
    break;
  } else {
    if(input[i].match(nemo)){
      console.log("Found")
    } else {
      console.log("Missing")
    }
  }
}