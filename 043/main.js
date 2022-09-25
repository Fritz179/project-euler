let answer = 0

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const divisible = [2, 3, 5, 7, 11, 13, 17]

function test(num) {
  if (num[0] == '0') return

  for (let i = 1; i <= 7; i++) {
    const string = num[i] + num[i + 1] + num[i + 2]
    if ((Number(string) / divisible[i - 1]) % 1 != 0) return
  }

  answer += Number(num.join(''))
}

// could check for divisibility to stop eary
function mix(arr, string = '') {
  if (!arr.length) test(string.split(''))

  for (let i = 0; i < arr.length; i++) {
    const newArr = [...arr]
    const digit = newArr.splice(i, 1)[0]
    mix(newArr, string + digit)
  }
}

mix(digits)

console.log(`Answer: ${answer}`)
