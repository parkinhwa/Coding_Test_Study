let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, M] = input.shift().split(" ").map(Number);
let quiz = input.splice(N, M)
// console.log(N, M, input, quiz)
// let N = 26, M = 5;
// let input = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu"]
// let quiz = ["25", "Raichu", "3", "Pidgey", "Kakuna"];
let object = {};
for(let i = 0; i < N; i++){
  object[input[i]] = i;
}
// console.log(object)
for(let j = 0; j < M; j++){
  // console.log(parseInt(quiz[j]))
  if(isNaN(parseInt(quiz[j]))){
    console.log(object[quiz[j]]+1);  
  } else {
    console.log(input[quiz[j]-1]);
  }
}