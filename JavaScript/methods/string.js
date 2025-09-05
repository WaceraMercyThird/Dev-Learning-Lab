let str = "Hello World ";

//length

console.log(str.length);

//change case
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());

// trim spaces
console.log(str.trim());

//Extract part of string
console.log(str.slice(0, 5));
console.log(str.substring(0, 9));


// Replace text
console.log(str.replace("World", "JS"));
console.log(str.replace("Hello", "I love this"));

//Split into array
console.log(str.split( " "))
console.log(str.split( ''))