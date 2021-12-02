let number = 600851475143
let answer = 0

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ((n / i) % 1 == 0) return false
  }

  return true
}

let i = 0
for (i = 2; i < number; i++) {
  if ((number / i) % 1 == 0) {
    number /= i

    if (isPrime(i)) {
      answer = i
    }

    i--
  }
}

if (isPrime(i)) {
  answer = i
}

console.log(`Answer: ${answer}`);
