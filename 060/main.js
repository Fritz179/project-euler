function sieve(n) {
  // get one more because array start at 0
  n++

  // create an n array, 0 and 1 are not prime
  const arr = new Uint8Array(n)
  for (let i = 2; i < n; i++) arr[i] = 1
  arr[0] = arr[1] = 0

  for (let i = 2; i * i < n; i++) {
    if (!arr[i]) continue

    for (let mul = i * i; mul < n; mul += i) {
      arr[mul] = 0
    }
  }

  const ret = new Set()

  for (let i = 2; i < n; i++) {
    if (arr[i]) ret.add(i)
  }

  return ret
}

const primes = sieve(100000000)
let record = Infinity

function test(curr, depth, sum, min) {
  if (sum >= record) return
  // console.log(curr);
  for (let i = 0; i < curr.length; i++) {
    for (let j = i + 1; j < curr.length; j++) {
      const left = Number(curr[i] + curr[j])
      if (!primes.has(left)) return

      const right = Number(curr[j] + curr[i])
      if (!primes.has(right)) return
    }
  }

  if (depth == 0) {
    if (sum < record) record = sum
    console.log(curr, sum);
    // process.exit()
    return
  }

  for (prime of primes) {
    if (prime <= min) continue
    const string = prime.toString()
    if (curr.includes(string)) continue
    if (prime > 10000) return
    test([...curr, string], depth - 1, sum + prime, prime)
  }
}

test([], 5, 0, 0)

console.log(`Answer: ${record}`)
