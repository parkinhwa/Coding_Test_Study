function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    if(cacheSize === 0) {
        return cities.length * 5
    }
    cities.forEach((city) => {
        city = city.toLowerCase()
        if(cache.indexOf(city) !== -1) {
            answer += 1
            cache.push(city)
            cache.splice(cache.indexOf(city), 1)
        } else {
            answer += 5
            if(cache.length < cacheSize) cache.push(city)
            else {
                cache.shift()
                cache.push(city)
            }
        }
    })
    return answer;
}