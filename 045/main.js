const triangle = []
const pentagon = []
const hexagon = []
for (let i = 0; i < 100000; i++) {
  triangle[i] = 0.5 * i * (i + 1)
  pentagon[i] = 0.5 * i * (3 * i - 1)
  hexagon[i] = i * (2 * i - 1)
}

const tSet = new Set(triangle)
const pSet = new Set(pentagon)
const hSet = new Set(hexagon)

hSet.forEach(el => {
  if (el <= 40755) return
  if (pSet.has(el) && tSet.has(el)) {
    console.log(`Answer: ${el}`);
  }
})

