const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const inputs = file.split('\n').slice(0, -1)

console.log(inputs);
