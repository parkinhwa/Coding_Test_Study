function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var now_bridge = []
    var now_weight = 0
    for(let i =0;i<bridge_length;i++){
        now_bridge.push(0);
    }
    
    var now_truck = truck_weights.shift();
    
    console.log(now_bridge)
    now_bridge.unshift(now_truck)
    console.log(now_bridge)
    now_bridge.pop()
    console.log(now_bridge)
    
    now_weight += now_truck
    
    answer++;
    
    while(now_weight){
        now_weight -= now_bridge.pop()
        now_truck = truck_weights.shift();
        if(now_truck+now_weight <= weight){
            now_bridge.unshift(now_truck)
            now_weight += now_truck
        } else{
            now_bridge.unshift(0);
            truck_weights.unshift(now_truck)
        }
        answer++
    }
    
    return answer;
}
