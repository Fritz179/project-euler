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
  arr.forEach((isPrime, i) => {
    if (isPrime) ret.push(i)
  })
  return ret
}

const primes = sieve(1000000)

function factors(n) {
  const ret = new Set()

  for (prime of primes) {
    let times = 0
    while ((n / prime) % 1 == 0) {
      times++
      n /= prime
    }
    if (times) ret.add(prime ** times)
    if (n == 1) return ret
  }

  throw 'Not enough primes!'
}

const max = 4
for (let i = 2; i < 1000000; i++) here: {
  let test = new Set()

  for (let k = 0; k < max; k++) {
    const set = factors(i + k)
    if (set.size != max) break here
    set.forEach(n => test.add(n))
  }

  if (test.size == max * max) {
    console.log(`Answer: ${i}`);
    return
  }
}

let answer = 0

console.log(`Answer: ${answer}`)
