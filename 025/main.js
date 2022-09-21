
const memo = [1n, 1n, 1n]
function fibonacci(i) {
  if (!memo[i]) {
    memo[i] = fibonacci(i - 1n) + fibonacci(i - 2n)
  }

  return memo[i]
}

let i = 1n
while (i++) {
  const fib = fibonacci(i)

  if (fib.toString().length >= 1000) {
    console.log(`Answer: ${i}`)
    break
  }
}

