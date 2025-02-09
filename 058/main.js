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

  return arr
}

const max = 1000000000
const primes = sieve(max)

let yes = 0
let total = 1
let len = 1
let curr = 1
for (let i = 2; ;i += 2) {
  for (let k = 0; k < 4; k++) {
    curr += i

    if (curr > max) throw `Max error at ${yes/total}`
    if (primes[curr]) yes++
    total++
  }
  len += 2

  if (yes / total < 0.1) {
    console.log(`Answer: ${len}`)
    break
  }
}

