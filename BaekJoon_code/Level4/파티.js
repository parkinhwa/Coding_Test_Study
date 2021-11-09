const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0, m = 0, x = 0;
let count = -1;
const input = [];

function dijkstra(graph) {
    const queue = [];
    const distance = new Array(n + 1).fill(Infinity);
    
    queue.push([x, 0]);
    distance[x] = 0;
    while (queue.length > 0) {
        const [start, cost] = queue.shift();
        for (let i = 0; i < graph[start].length; i++) {
            const [v, c] = graph[start][i];
            if (distance[v] > cost + c) {
                distance[v] = cost + c;
                queue.push([v, distance[v]]);
            }
        }
    }
    return distance;
}

rl.on("line", function (line) {
    if (count === -1) {
        [n, m, x] = line.split(" ").map((v) => parseInt(v));
        count = m;
        return;
    }
    count--;
    input.push(line.split(" ").map((v) => parseInt(v)));
    if (count === 0) rl.close();
}).on("close", function () {
    const goGraph = Array.from(Array(n + 1), () => new Array());
    const backGraph = Array.from(Array(n + 1), () => new Array());
    
    for (let i = 0; i < m; i++) {
        const [start, end, cost] = input[i];
        goGraph[start].push([end, cost]);
        backGraph[end].push([start, cost]);
    }

    const backDistance = dijkstra(backGraph);
    const goDistnace = dijkstra(goGraph);
    
    let max = 0;
    for (let i = 1; i <= n; i++) {
        const sum = backDistance[i] + goDistnace[i];
        max = Math.max(max, sum);
    }
    console.log(max);
});