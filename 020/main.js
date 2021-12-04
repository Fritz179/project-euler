function factorial(num) {
  if (num == 1) return num

  return num * factorial(num - 1n)
}

let sum = 0
factorial(100n).toString().split('').forEach(num => sum += Number(num))
console.log(`Amswer: ${sum}`);
