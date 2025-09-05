let numbers = [1, 2, 3, 4, 5, 6];


//Breakdown
// Reguler function version
numbers.forEach(function(num) {
    console.log(num)
});


// Arrow function version
numbers.forEach((num) => {
    console.log(num);
});

// Short form
numbers.forEach(num => console.log(num));