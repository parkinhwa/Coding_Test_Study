// 유클리드 호제법
// 최소공배수 = 두 자연수의 곱 / 최대공약수
function solution(n, m) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(n, m), lcm(n, m)];
}