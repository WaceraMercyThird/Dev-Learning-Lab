// parse numbers
console.log(Number("34"))
console.log(parseInt("34"))
console.log(parseFloat(3.14))

//JSON
let odj = {a: 1, b: 2}
let json = JSON.stringify(odj);
let parse = JSON.parse(json);
console.log(parse)