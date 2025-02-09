function sieve(n) {
  // get one more because array start at 0
  n++

  // create an n array, 0 and 1 are not prime
  const arr = new Uint8Array(n)
  for (let i = 0; i < n; i++) arr[i] = 1
  arr[0] = arr[1] = 0

  for (let i = 2; i * i < n; i++) {
    if (!arr[i]) continue

    for (let mul = i * i; mul < n; mul += i) {
      arr[mul] = 0
    }
  }

  if (!set) return arr

  const ret = new Set()

  for (let i = 2; i < n; i++) {
    if (arr[i]) ret.add(i)
  }

  return ret
}

const primes = sieve(10 ** 7, true)

console.log(primes.size);