const num = 2n ** 1000n

let sum = 0
num.toString().split('').forEach(num => sum += Number(num))

console.log(`Answer: ${sum}`);
