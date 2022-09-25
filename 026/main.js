const len = 2000n
const int = 10n ** len
const max = 1000

let record = 0
let holder = 0
let recurrent = ''

for (let i = 2n; i < max; i++) out: {
  const string = (int / i).toString()

  if (string.includes('000000000')) continue

  for (let start = 0; start < len; start++) {
    for (let check = 1; check < len; check++) {
      const separator = string.slice(start, start + check)
      const split = string.split(separator)
      const first = split.shift()
      split.pop()
      if (split.join('') == '') {
        // console.log(i, string, separator, check)
        // console.log(i, check)
        if (check > record) {
          record = check
          holder = i
          recurrent = `${first}(${separator})`
        }

        break out
      }
    }
  }

  console.log(i, string)
  break
}

console.log(`Answer: ${holder}, with: ${record}, ${recurrent}`)
