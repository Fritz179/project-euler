const max9 = 362880

const factorialMemo = []
function factorial(n) {
  if (n == 0) return 1

  if (!factorialMemo[n]) {
    factorialMemo[n] = n * factorial(n - 1)
  }

  return factorialMemo[n]
}

function isSpecial(n) {
  const digits = n.toString().split('').map(n => Number(n))
  let sum = 0
  digits.forEach(digit => sum += factorial(digit))
  return sum == n
}

let answer = 0
for (let i = 3; i < max9 * 7; i++) {
  if (isSpecial(i)) answer += i
}

console.log(`Answer: ${answer}`)