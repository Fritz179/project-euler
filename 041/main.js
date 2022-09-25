let record = 0

const primes = []

function isPrime(num) {
  for (let i = 0; i < primes.length; i++) {
    const prime = primes[i]

    if (((num / prime) % 1) == 0) return false
    if ((num / prime) < prime) return true
  }

  return true
}

// Note: Nine numbers cannot be done (1+2+3+4+5+6+7+8+9=45 => always dividable by 3)
// Note: Eight numbers cannot be done (1+2+3+4+5+6+7+8=36 => always dividable by 3)

const max = 10000000
for (let i = 2; i < max; i++) here: {
  if (!isPrime(i)) {
    continue
  }
  primes.push(i)

  const string = i.toString()
  const set = new Set(string.split(''))

  if (set.size == string.length && !set.has('0')) {
    for (let test = set.size + 1; test < 10; test++) {
      if (set.has(`${test}`)) break here
    }
    if (i > record) {
      record = i
      // console.log(i)
    }
  }
}

console.log(`Answer: ${record}`)
