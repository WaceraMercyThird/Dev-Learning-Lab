let arr = [1, 2, 3, 4, 5];

// add/remove
arr.push(6);
arr.pop();
arr.shift();
arr.unshift(1);


// Transform
let doubled = arr.map(n => n * 3);
let evens = arr.filter(n => n % 2 === 0);
let sum = arr.reduce ((a, b) => a + b);

// console.log(arr);
// console.log(sum);

console.log(arr.includes(0));
console.log(arr.indexOf(2));
console.log(arr.find(n => n > 1));





