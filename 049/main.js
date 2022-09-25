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

  const set = new Set()

  for (let i = 2; i < n; i++) {
    if (arr[i]) set.add(i)
  }

  return set
}

const primes = sieve(10000)

function isPerm(a, b) {
  b = b.toString()
  a = a.toString().split('').forEach(c => b = b.replace(c, ''))
  return b == ''
}

primes.forEach(n => {
  if (n < 1000) return

  for (let i = 1; ; i++) here: {
    let test = n
    let perms = new Set(n.toString().split(''))

    for (let k = 0; k < 2; k++) {
      test += i
      if (test > 10000) return
      if (!primes.has(test)) break here
      if (!isPerm(n, test)) break here
    }

    if (n != 1487) {
      console.log(`Answer: ${n}${n+i}${n+i+i}`);
      process.exit()
    }
  }
})
