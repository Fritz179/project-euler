function isPrime() {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i = i + 6;
  }
  return true;
}

function sieve(n, set) {
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

  if (!set) return arr

  const ret = new Set()

  for (let i = 2; i < n; i++) {
    if (arr[i]) ret.add(i)
  }

  return ret
}

const primes = sieve(10 ** 7, true)

console.log(primes.size);