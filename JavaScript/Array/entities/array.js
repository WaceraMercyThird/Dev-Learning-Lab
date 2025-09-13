const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
const k = fruits.values();

for (let fruits of f){
    console.log(fruits)
}
for (let x of k) {
    console.log(x)
}
var reverseStr = (str) =>{
    let reversed = Array.from(str).reverse().join("");
    return reversed;
}

let text = "Hello";
let text2 = "Hello 😄";

let pattern = /\p{Emoji}/u;
let result = pattern.test(text2)

console.log(reverseStr("JavaScript"))
console.log(Array.from("JavaScript"));
console.log(result);

