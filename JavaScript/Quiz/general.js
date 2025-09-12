// Reverse a given integer number.
function reverseInt(int){
    return int.toString().split("").reverse().join("")
};

//Reverse a given string
function reverseString(str){
    return str.split("").reverse().join("")
};


// Find the factorial of a number.
var factional = (n) => {
    if (n ===0) return 1;
    return n * factional(n-1)
};

// Generate the first N Fibonacci numbers.
var fibonacci = (n) => {
    let seq =[0, 1];
    for (let i=2; i< n; i++){
        seq[i] = seq[i-1] + seq[i-2];
    }
    return seq
};

// Check whether a number is a prime number.

// Find the greatest common divisor (GCD) of two numbers.
var gcd = (a, b) => {
    while (b !== 0){
        let temp = b;
        b = a % b;
        a = temp
    }
    return a
};

// Find the least common multiple (LCM) of two numbers.

// Check if a number is an Armstrong number.
var isArmstrong = (num) =>{
    let digits = num.toString().split("");
    let power = digits.length;
    let sum = digits.reduce((acc, n) => acc + Math.pow(Number(n), power), 0);
    return sum;
};

// Find the sum of digits of a number.
var sumOfNum = (num) => {
    return num
    .toString()
    .split("")
    .reduce((acc, n) => acc + Number(n),0)
};

function sum(n){
    return n
    .split("")
    .reduce((acc, s) => acc + Number(s), 0);
};

// Check if a number is a palindrome.
function isPalindrome(str){
    let reversed = str.split("").reverse().join("");
    return str === reversed
};

// Find all divisors of a number.

// Calculate the power of a number (x^n).
function power(base, exp){
    return Math.pow(base,exp);

};

// Generate a random integer between two given numbers.
var randomInt = function(){
   return Math.floor(Math.random()*100)+1;
}

// Check if a number is a perfect number.
function isPerfect(n){
    let count = 0;
    for (let i = 1; i <n; i++){
        if(n % i===0) count += i
    }
    return count === n;
}

// Find the minimum and maximum in an array of numbers.
function minArray(arr){
    return Math.min(...arr);
};

function maxArray(arr){
    return Math.max(...arr);
};

// Count how many even and odd digits a number has.
var countEvenOld = function (evol){
    let countEven = 0;
    let countOld = 0;
    for (let i=0; i<evol.length; i++){
        if(evol[i]%2===0)countEven+=evol[i];
        countOld+=evol[i];
        
    }
    
    return countEven += countOld;
};


// Given a string s, reverse only all the vowels in the string and return it.
var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU';
    const chars = [...s];

    const vowelsOnly = chars.filter(c => vowels.includes(c)).reverse();

    return chars.map(c => vowels.includes(c) ? vowelsOnly.shift() : c).join('');
    
};

function reverseVow(s){
    let vowels = 'aeiouAEIOU';
    const chars = [...s];

    return chars.filter(c => s.includes(c)).reverse();
};

//Longest common prefix
var longestCommonPrefix = (strs) =>{
    if (!strs.length) return "";
    return strs.reduce((prefix, word) =>{
        return prefix
    .split("")
    .filter((_, i) => word.startsWith(prefix.slice(0, i+1)))
    .join("");
    });

    
    
};

//Given a string s consisting of words and spaces,
// return the length of the last word in the string.
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

console.log(reverseInt(1234));
console.log(reverseString("Mercie"));
console.log(isPalindrome("racecar"));
console.log(minArray([23,4,6,12,67]));
console.log(maxArray([23,4,6,12,67]));
console.log(reverseVowels("IceCreAm"))
console.log(reverseVow("IceCreAm"));
console.log(countEvenOld([2,3,4,5,1,7]));
console.log(randomInt());
console.log(power(2,2));
console.log(sumOfNum(154));
console.log(sum("235"));
console.log(factional(19))
console.log(fibonacci(5))
console.log(gcd(30, 20));
// console.log(lcm(14, 16));
console.log(lengthOfLastWord("Hello World ")); 




// Test
console.log("");   // 
console.log(isPerfect(6));   // true 1+2+3 =6
console.log(isPerfect(28));  // true
console.log(isPerfect(12));  // false
console.log(isPerfect(1));   // false
console.log(isArmstrong(12));


// s.trim() → removes extra spaces at the start and end.

// .split(" ") → breaks string into an array of words.

// .pop() → gets the last element (last word).

// .length → counts its length.