const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => {
    process.exit();
});

const main = (line) => {
   // - 이후에 있는 + 값들 다 더해주고
    const minuses = line.split("-").map((el) =>
        el
            .split("+")
            .map(Number)
            .reduce((acc, cur) => acc + cur)
    );
    // 더해서 만든 -값 빼줌
    console.log(minuses.reduce((acc, cur) => (acc -= cur)));
};

// 되긴 하는데 백준에서 Syntax error 난다... 이유는 모름... eval때문인것 같다.
// let oper = /[+-]/g;
// let num = /[0-9]/;
// let open = /[(]/;
// let close = /[)]/;
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split();
// let number = input.split(oper).map(Number);
// let operator = input.match(oper);
// let n = number.length + operator.length;
// let arr = [];
// let idx_n = 0, idx_o = 0;
// for(let i = 0; i < n; i++){
//   if(i%2 === 0){
//     arr.push(number[idx_n]);
//     idx_n++;
//   } else {
//     arr.push(operator[idx_o]);
//     idx_o++;
//   }
// }
// // console.log(arr);
// let exp = "";
// exp += arr[0];
// for(let i = 1; i < n; i++){
//   if(arr[i] === "-" && i != n-1){
//     exp += arr[i]+"(";
//     if(arr[i+2] === "-"){
//       exp += arr[i+1]+")";
//       i++;
//     }
//   } else if(arr[i] === "-" && open.test(exp) && !close.test(exp) || i == n-1 && open.test(exp)){
//     exp += arr[i]+")"
//   } else {
//     exp += arr[i];
//   }
// }
// // console.log(exp)
// console.log(eval(exp))
