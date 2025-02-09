// let value = 23
// let inv = Math.sqrt(value)
// let nextValue = Math.floor(inv)
// let denom = 1
// let nextBinN = - nextValue
// console.log(nextValue);
//
// for (let i = 0; i < 8; i++) {
//   inv = 1 / (inv - nextValue)
//   nextValue = Math.floor(inv)
//   denom = (23 - nextBinN * nextBinN) / denom
//   nextBinN = Math.abs(nextBinN) - denom * nextValue
//   console.log(`${nextValue} + (${nextBinN} / ${denom})`);
// }

function sqrt(value) {
    if (value < 0n) {
        throw 'square root of negative numbers is not supported'
    }

    if (value < 2n) {
        return value;
    }

    function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

    return newtonIteration(value, 1n);
}


let answer = 0
function test(i, scale, iterations) {
  let values = ''

  let inv = sqrt(i * scale ** 2n)
  let nextValue = inv - (inv % scale)

  for (let i = 0n; i < iterations; i++) {
    if (inv - nextValue == 0) return true

    inv = scale * scale / (inv - nextValue)
    nextValue = inv - (inv % scale)

    values += nextValue.toString()[0]
  }

  for (let k = 1; k < iterations / 2; k++) {
    const repeat = values.split(values.slice(0, k))
    repeat.pop()

    if (repeat.join('') == '' && repeat.length > 10) {

      if (k % 2 == 1) answer ++
      console.log(i, k, iterations);
      return true
    }
  }

  return false
}


for (let i = 0n; i <= 10000; i++) {
  if (!test(i, 10n ** 20n, 14)) {
    if (!test(i, 10n ** 100n, 70)) {
      if (!test(i, 10n ** 300n, 200)) {
        if (!test(i, 10n ** 800n, 700)) {
          if (!test(i, 10n ** 1500n, 1300)) {
            if (!test(i, 10n ** 3000n, 2500)) {
              process.exit()
            }
          }
        }
      }
    }
  }
}

// 4174


console.log(`Answer: ${answer}`);

// for (let i = 0; i < 13; i++) out: {
//   let values = ''
//   let inv = Math.sqrt(i)
//   let nextValue = Math.floor(inv)
//
//   for (let i = 0; i < 20; i++) {
//     inv = 1 / (inv - nextValue)
//     nextValue = inv - (inv % 1)
//
//     if (Number.isNaN(nextValue)) break out
//     values += nextValue
//   }
//
//   for (let k = 1; k < 10; k++) {
//     const repeat = values.slice(0, k)
//     // console.log(repeat);
//   }
//
//   console.log(i, values);
// }