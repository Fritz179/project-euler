const max = 9

function factorial(num) {
  let sum = 1
  for (let i = 2; i <= num; i++) sum *= i
  return sum
}



let string = []
for (let i = 0; i <= max; i++) string.push(i)
let remaining = 1000000 - 1
let out = []

for (let i = 10; i > 0; i--) {
  const num = factorial(i - 1)

  // console.log(num, i)
  if (num <= remaining) {
    const digit = Math.floor(remaining / num)

    remaining -= digit * num

    out.push(string.splice(digit, 1)[0])

  } else {
    out.push(string.shift())
  }
}

console.log(`Answer: ${out.join('')}`)
