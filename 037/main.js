const primes = []

function isPrime(num) {
  for (let i = 0; i < primes.length; i++) {
    const prime = primes[i]

    if (((num / prime) % 1) == 0) return false
    if ((num / prime) < prime) return true
  }

  return true
}

const max = 1000000
for (let i = 2; i < max; i++) {
  if (isPrime(i)) primes.push(i)
}

const set = new Set(primes)

function isTruncable(num) {
  if (num < 10) return false

  {
    const array = num.toString().split('')
    while (array.length) {
      if (!set.has(Number(array.join('')))) return false
      array.pop()
    }
  }

  {
    const array = num.toString().split('')
    while (array.length) {
      if (!set.has(Number(array.join('')))) return false
      array.shift()
    }
  }

  return true
}

let answer = 0
for (let i = 0; i < primes.length; i++) {
  if (isTruncable(primes[i])) answer += primes[i]
}

console.log(`Answer: ${answer}`)