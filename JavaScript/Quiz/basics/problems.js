// reverse a string

function reverseSString(str) {
    return str.split("").reverse().join("")

}

//Check if Even or Old
function isEven(num){
    return num % 2 === 0 ? "Even" : "Old"
}

//the largest number in an array
function largestArr(arr){
    return Math.max(...arr)
}

//the smallest array
function smallestArray(arr){
    return Math.min(...arr)
}

//Count Vowels in a string
function countVowels(str){
    return str.match(/[aeiou]/gi)?.length || 0
};

//Check if a word is palindrome
function isPalindrome(str){
    let reversed = str.split("").reverse().join("") 
    return str == reversed
};

//sum of all numbers in an array
function sumArray(arr){
    return arr.reduce((acc, num) => acc + num);
}

function factorial(n){
    if (n === 0) return 1;
    return n * factorial(n-1)
}

//fizzBuzz
for (let i=0; i <=15; i++){
    if ( i % 3 ===0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log(" Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);

}

//Generate a randon number (between min and max)
function randomNum(min, max) {
    return Math.floor(Math.random() * (max -min + 1)) + min;
};
//console
console.log(reverseSString("JavaScript"));
console.log(isEven(2));
console.log(largestArr([2,1,4,23,54,12]));
console.log(smallestArray([2,1,4,23,54,12]));
console.log(countVowels("JavaScript"));
console.log(isPalindrome("racecar"));
console.log(sumArray([2, 22]));
console.log(factorial(5));
console.log(randomNum(1, 100));
