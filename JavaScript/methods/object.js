let person =  {name: "Alice", age : 67};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

let copy = Object.assign({}, person);

console.log(copy)
