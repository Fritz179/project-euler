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

  return arr
}

const arr = sieve(10000)
const primes = new Set()
const odds = []
const square = [2]

for (let i = 2; i < arr.length; i++) {
  square.push(2 * i * i)

  if (arr[i]) {
    primes.add(i)
    continue
  }

  if (i % 2 == 1) odds.push(i)
}

for (odd of odds) here: {
  for (let i = 0; square[i] < odd; i++) {
    const diff = odd - square[i]
    if (primes.has(diff)) break here
  }

  console.log(`Answer: ${odd}`);
  return
}
