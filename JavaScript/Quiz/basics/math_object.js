//factonal of a number
function factional(n){
    if (n === 0) return 1;
    return n * factional(n -1)
};


// fibonacci sequence
function fibonacci(n) {
    let seq = [0, 1];
    for (let i =2; i < n; i++){
        seq[i] = seq[i -1] + seq[i -2];
    }
    return seq;
};

//prime Number Check
function isPrime(n){
    if (n < 2) return false ;
    for (let i = 2; i<=Math.sqrt(n); i++){
        if (n % i === 0) return false;
    }

    return true;
};

//Greatest Common Divisor (GCD)
function gcd(a, b){
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a =temp
    }
    return a;
};

//Least Common Multiple (LCM)
function lcm(a, b){
    return (a, b) / gcd(a, b);
};

//Armsr=trong Number Check
function isArmstrong(num) {
    let digits  = num.toString().split("");
    let power = digits.length;
    let sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
    return sum == num;
};

//sum of digits
function sumOfDigits(num) {
    return num
    .toString()
    .split("")
    .reduce((acc, d) => acc + Number(d), 0);
}

// Perfect Number Check
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++){
        if (num % i === 0) sum +=1
    }
    return sum === num;

}

//power of a number
function power(base, exp){
    return Math.pow(base, exp);
}

//generate aa random prime in a range
function randomPrime(min, max) {
    let num;
    do{
        num = Math.floor(Math.random() * (max - min + 1)) +min
    }while (!isPrime(num));
    return num
};


//Generate a random number between 0 - 1
function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
} ;

//Random Password Generator(bonus with math + random)
function randomPassword(length){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let pass = "";
    for (let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * chars.length);
        pass += chars[randomIndex];
    }
    return pass;
};
// print out
console.log(factional(5));
console.log(fibonacci(5));
console.log(isPrime(7));
console.log(gcd(30, 20));
console.log(lcm(14, 16));
console.log(isArmstrong(153));
console.log(sumOfDigits(153));
console.log(isPerfect(13));
console.log(`Power of a number ${power(2, 2)}`);
console.log(`Random prime in a range: ${randomPrime(10, 50)}`);
console.log(`Random integer between : 0 - 100: ${randomNumber()}`);
console.log(`Random Password: ${randomPassword(9)}`)




// Math Object Problem
console.log(" ")
console.log(Math.round(4.2));
console.log(Math.ceil(7.9));
console.log(Math.floor(4.9));
console.log(Math.max(10, 3,5,7));
console.log(Math.min(10, 3,5,7));
console.log(`Random Number from 0-1: ${Math.random()}`);
console.log(`Square Root: ${Math.sqrt(25)}`);
console.log(`Power : ${Math.pow(5, 2)}`);
console.log(`Absolute Value : ${Math.abs()}`)
console.log(`Trigonometry sin :${Math.sin(Math.PI/2)}`);
console.log(`Trigonometry con :${Math.cos(0)}`);
console.log(`Trigonometry tan :${Math.tan(Math.PI / 4)}`);
console.log(`Natural Log base : ${Math.log(1)}`);
console.log(`Logarithms base: ${Math.log10(100)}`);
console.log(`cbrt ${Math.cbrt(27)}`)
console.log(`Anything math related: ${Math.sqrt(25)}`);
