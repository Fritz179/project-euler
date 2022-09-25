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

const primes = sieve(1000000)
const set = new Set(primes)
const tested = new Set()

primes.forEach(prime => {
  const original = prime.toString().split('')
  const permutations = 2 ** original.length - 1

  for (let i = 1; i < permutations; i++) {
    const mask = i.toString(2).padStart(original.length, '0')
    let count = 0
    for (let num = 0; num < 10; num++) {
      const newNum = original.map((el, pos) => mask[pos] == '0' ? el : num)

      const id = newNum.join('') + mask
      if (tested.has(id)) continue
      tested.add(id)

      if (newNum[0] == '0') continue
      const test = Number(newNum.join(''))

      if (set.has(test)) {
        count++
        if (count >= 8) {
          const replace = mask[0] == '1' ? 1 : 0
          const newNum = original.map((el, pos) => mask[pos] == '0' ? el : replace)
          console.log(`Answer: ${Number(newNum.join(''))}`);
          process.exit()
        }
      }
    }
  }
})