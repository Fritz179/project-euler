let string = ''

let i = 1
while (string.length < 1000000) {
  string += i
  i++
}

const answer = string[0] * string[9] * string[99] * string[999] * string[9999] * string[99999] * string[999999]

console.log(`Answer: ${answer}`)