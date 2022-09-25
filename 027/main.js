const isPrimeMemo = []
function isPrime(n) {
  n = Math.abs(n)

  if (typeof isPrimeMemo[n] != 'boolean') {
    isPrimeMemo[n] = true

    for (i = 2; i * i <= n; i++) {
      if ((n / i) % 1 == 0) {
        isPrimeMemo[n] = false
        break
      }
    }
  }

  return isPrimeMemo[n]
}

let record = 0
let holder = 0

for (let a = -1000; a < 1000; a++) {
  // console.log(a)
  for (let b = -1000; b < 1000; b++) {
    for (let i = 0; i < 1000; i++) {
      const num = i * i + a * i + b

      if (!isPrime(num)) {
        if (i > record) {
          record = i
          holder = a * b
          // console.log(a, b, i, num, isPrime(num))
        }
        break
      }
    }
  }
}

console.log(`Answer: ${holder}, ${record}`)