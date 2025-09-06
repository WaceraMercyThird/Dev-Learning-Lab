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


// print out
console.log(factional(5));
console.log(fibonacci(5));