let answer = 0


// Triangle	 	  P3,n=n(n+1)/2	 	  1, 3, 6, 10, 15, ...
// Square	 	    P4,n=n2	 	        1, 4, 9, 16, 25, ...
// Pentagonal	 	P5,n=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
// Hexagonal	 	P6,n=n(2n−1)	 	  1, 6, 15, 28, 45, ...
// Heptagonal	 	P7,n=n(5n−3)/2	 	1, 7, 18, 34, 55, ...
// Octagonal	 	P8,n=n(3n−2)	 	  1, 8, 21, 40, 65, ...

const formulas = [
  i => i * (i + 1) / 2,
  i => i * i,
  i => i * (3 * i - 1) / 2,
  i => i * (2 * i - 1),
  i => i * (5 * i - 3) / 2,
  i => i * (3 * i - 2)
]

const maps = formulas.map(_ => new Map())

formulas.forEach((formula, i) => {
  const map = maps[i]

  for (let i = 1; ; i++) {
    const num = formula(i)
    if (num < 1000) continue
    if (num > 9999) return

    const string = num.toString()
    const left = string[0] + string[1]
    const right = string[2] + string[3]

    if (!map.has(left)) map.set(left, new Set())
    map.get(left).add(right)
  }
})

function find(maps, sequence, set, depth) {
  if (depth == 6) {
    set.forEach(sub => {
      if (sub == sequence[0]) {
        console.log(sequence);

        let sum = 0
        for (let i = 0; i < sequence.length; i++) {
          const string = sequence[i] + sequence[(i + 1) % sequence.length]
          sum += Number(string)
        }

        console.log(`Answer: ${sum}`);
        process.exit()
      }
    })
    return
  }

  const map = maps[depth]
  set.forEach(sub => {
    if (map.has(sub)) {
      find(maps, [...sequence, sub], map.get(sub), depth + 1)
    }
  })
}

function test(curr, remaining) {
  if (curr.length == remaining.length) {
    curr[0].forEach((set, key) => {
      find(curr, [key], set, 1)
    })

    return
  }

  for (next of remaining) {
    if (curr.includes(next)) continue
    test([...curr, next], remaining)
  }
}

test([], maps)
