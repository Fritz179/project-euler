const factorialMemo = [1]
function factorial(n) {
  if (!factorialMemo[n]) {
    factorialMemo[n] = n * factorial(n - 1)
  }

  return factorialMemo[n]
}

function chose(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r))
}

let answer = 0

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (chose(i, j) > 1000000) answer++
  }
}

console.log(`Answer: ${answer}`);
