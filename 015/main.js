let hashes = {}

function solveGrid(w, h) {
  if (w == 0 || h == 0) return 1
  const hash = `${w}_${h}`

  if (!hashes[hash]) {
    hashes[hash] = solveGrid(w - 1, h) + solveGrid(w, h - 1)
  }

  return hashes[hash]
}

console.log(solveGrid(20, 20));
