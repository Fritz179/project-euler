// const set = new Set()
//
// for (let i = 1; i < 10000; i++) {
//   set.add(i ** 3)
// }
//
// function test(string, original) {
//   if (original.length == 0) {
//     const num = Number(string)
//     if (set.has(num)) {
//       set.delete(num)
//       return 1
//     }
//
//     return 0
//   }
//
//   let sum = 0
//   const tested = new Set()
//   for (let i = 0; i < original.length; i++) {
//     const sub = [...original]
//     const c = sub.splice(i, 1)[0]
//     if (tested.has(c)) continue
//     tested.add(c)
//     sum += test(string + c, sub)
//   }
//   return sum
// }
//
//
// set.forEach(n => {
//   const valid = test('', n.toString().split(''))
//   if (valid >= 3) {
//     console.log(valid, n);
//   }
// })
//

const map = new Map()

for (let i = 1; i < 100000; i++) {
  const num = i ** 3
  const key = num.toString().split('').sort().join()

  if (!map.has(key)) {
    map.set(key, [1, num])
  } else {
    const value = map.get(key)
    value[0]++

    if (value[0] == 5) {
      console.log(`Answer: ${value[1]}`);
      process.exit()
    }
  }
}