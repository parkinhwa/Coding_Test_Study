// 런타임 에러
// function solution(genres, plays) {
//     var answer = [];
//     let playlist = [];
//     let genres_sum = [];
//     let n = genres.length;
//     let gen = new Array(...new Set(genres));
//     for(g of gen){
//         let arr = [];
//         let sum = 0;
//         for(let i = 0; i < n; i++){
//             if(g === genres[i]){
//                 arr.push([i, plays[i]])
//                 sum += plays[i];
//             }
//         }
//         arr.sort((a, b) => {
//             if(a[1] === b[1]){
//                 return a[0] - b[0];
//             } else {
//                 return b[1] - a[1];
//             }
//         })
//         playlist[g] = arr;
//         genres_sum.push([g, sum]);
//     }
//     genres_sum.sort((a, b) => {
//         return b[1] - a[1]
//     })
    
//     for(let j = 0; j < genres_sum.length; j++){
//         for(let k = 0; k < 2; k++){
//             answer.push(playlist[genres_sum[j][0]][k][0])
//         }
//     }
//     return answer;
// }

// 강사님 풀이
function solution(genres, plays) {
  const genreMap = new Map();

  genres
    // 받은 장르, 재생 횟수 배열로 묶어줌
    .map((genre, index) => [genre, plays[index]])
    // 묶은 애들을 가져와서 데이터 만듬
    .forEach(([genre, play], index) => {
        // data = genreMap에 있던 genre(key)에 해당하는 값 불러옴
        // 없으면 total:0 songs: []로 초기화
        const data = genreMap.get(genre) || {total:0, songs: []};
        // 장르맵에다가 장르 이름(key)으로 set(key를 통해 value 저장)해줌
        genreMap.set(genre, {
          // total은 현재 data에 total + 현재 play(재생횟수)
          total: data.total + play,
          // 기존의 있던 곡들을 넣어주고 
          // 추가적으로 입력받은 play(재생횟수) 값과 index 값 넣어줌
          songs: [...data.songs, {play, index}]
            // 재생순으로 내림차순 정렬
            .sort((a, b) => b.play - a.play)
            // 2개만 자름
            .slice(0, 2)
        })
    })
  
    // songs에는 [play, index] 2차원 배열모양(?)인 object가 들어있음
    // [[{play:2500, index: 4}, {play: 600, index: 1}], 
    //  [{play:800, index: 3}, {play: 500, index: 0}]]
    // console.log(...genreMap.entries()); 
    return [...genreMap.entries()]
    // total 순 정렬
    .sort((a, b) => b[1].total - a[1].total)
    // songs를 flatMap으로 1차원 배열로 만들어준다.
    .flatMap(item => {
      // console.log(item[0]);
      return item[1].songs})
    .map(song => song.index)
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays))