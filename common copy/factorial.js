const factorialMemo = [1]
function factorial(n) {
  if (!factorialMemo[n]) {
    factorialMemo[n] = n * factorial(n - 1)
  }

  return factorialMemo[n]
}