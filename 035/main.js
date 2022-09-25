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

const answer = []
for (let i = 0; i < primes.length; i++) here: {
  const array = primes[i].toString().split('')

  for (let k = 1; k < array.length; k++) {
    array.push(array.shift())
    const num = Number(array.join(''))
    if (!set.has(num)) break here
  }

  answer.push(primes[i])
}

console.log(`Answer: ${answer.length}`)