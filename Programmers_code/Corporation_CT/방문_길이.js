function solution(dirs) {
    var answer = 0;
    let coordinates = {
    x: 0,
    y: 0
  };

  return dirs.split("").reduce((acc, dir) => {
    let { x, y } = coordinates;

    switch (dir) {
      case "U":
        if (y === 5) break;
        acc.add(`${x}/${y + 0.5}`);
        coordinates.y++;
        break;
      case "D":
        if (y === -5) break;
        acc.add(`${x}/${y - 0.5}`);
        coordinates.y--;
        break; 
      case "R":
        if (x === 5) break;
        acc.add(`${x + 0.5}/${y}`);
        coordinates.x++;
        break;
      case "L":
        if (x === -5) break;
        acc.add(`${x - 0.5}/${y}`);
        coordinates.x--;
        break;
    };

    return acc;
  }, new Set()).size;
}
dirs = "ULURRDLLU"
dirs2 = "LULLLLLLU"
dirs3 = "UDU"
console.log(solution(dirs))