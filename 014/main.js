function collatzLength(num) {
  let length = 1

  while (num != 1) {
    length++

    if (num % 2 == 0) {
      num /= 2
    } else {
      num *= 3
      num++
    }
  }

  return length
}

let record = 0
let holder = 0

for (let i = 1; i < 1000000; i++) {
  const len = collatzLength(i)
  if (len > record) {
    record = len
    holder = i
  }
}

console.log(`Answer: ${holder}`);
console.log(`With: ${record} steps`);
