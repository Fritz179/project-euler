function sieve(n) {
  // get one more because array start at 0
  n++

  // create an n array, 0 and 1 are not prime
  const arr = Array(n).fill(true)
  arr[0] = arr[1] = false

  for (let i = 2; i * i < n; i++) {
    if (!arr[i]) continue

    for (let mul = i * i; mul < n; mul += i) {
      arr[mul] = false
    }
  }

  const ret = []

  for (let i = 2; i < n; i++) {
    if (arr[i]) ret.push(i)
  }

  return ret
}

const max = 1000000
const primes = sieve(max)
const set = new Set(primes)
let record = 0
let holder = 0

for (let i = 0; i < primes.length; i++) {
  let sum = 0

  let offset = 0
  while (sum < max) {
    sum += primes[i + offset]
    if (set.has(sum)) {
      if (offset > record) {
        record = offset
        holder = sum
      }
    }
    offset++
  }

}

console.log(`Answer: ${holder}, with: ${record + 1}`)
