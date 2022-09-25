// function digits(n) {
//   return n.toString().length
// }
//
// function isPan(n) {
//   const maxA = 10 ** (8 - digits(n))
//
//   for (let a = 1; a < maxA && a * a < n; a++) {
//     const maxB = 10 ** (9 - digits(n) - digits(a))
//
//     for (let b = a + 1; b < maxB && b * a <= n; b++) {
//       if (a * b != n) continue
//       const set = new Set(`${a}${b}${n}`.split(''))
//       if (set.size != 9) continue
//       return true
//     }
//   }
//
//   return false
// }
//
// let answer = 0
// const max = 10 ** 5
// for (let i = 10 ** 3; i < max; i++) {
//   if (isPan(i)) answer += i
// }

let answers = new Set()

for (let a = 2; a < 10000; a++) {
  for (let b = 2; b < 10000; b++) {
    const prod = a * b
    const string = `${a}${b}${prod}`
    if (string.length > 9) break
    if (string.length != 9) continue

    const set = new Set(string.split(''))
    if (set.size == 9 && !set.has('0')) {
      answers.add(prod)
      continue
    }
  }
}

let sum = 0
answers.forEach(num => sum += num)
console.log(`Answer: ${sum}`)