// Long Version
function add(a, b) {
    return a + b;
}

const y = add (2, 5);

console.log(y);

// Short Version
const multiply = (a, b) => a * b;
console.log(multiply(3, 2))

let user = "Mercy";
console.log("Hello, " + user +"!")
console.log(`Hello, ${user}!`) //Short & cleaner


let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
let evens = nums.filter(n => n % 2 === 0);
let sum = nums.reduce((a, b) => a + b, 0);
console.log(doubled, evens, sum);


let users = [
    {name: "Alice", Age: "22"},
    {name: "Bob", Age: "23"},
    {name: "Charlie", Age: "28"},
];

let names = users.map(user => user.name);
console.log(names);


let products = [
    {name: "Laptop", Price: 10000},
    {name: "Phone", Price: 500},
];

let withTax = products.map( p => ({
    names: p.name,
    Price: p.Price * 1.16
}));

console.log(withTax);

let numbers = [1, 2, 3, 4, 5, 6, 7];

let result = numbers
.map(n => n *2)
.filter(n => n >= 10)

console.log(result);
