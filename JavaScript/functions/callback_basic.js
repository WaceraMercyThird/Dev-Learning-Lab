//  Basic Example
function Greet(name, callback){
    console.log("Hello"+" " + name);
    callback();
};

Greet("Mercy", () => {
    console.log("Make my day");
});

//  Callbacks with setTimeout
function delayedMessage(message, callback){
    setTimeout(() => {
        console.log(message);
        callback();
    }, 8000);
};

delayedMessage("First Message", () => {
    console.log("Callkback after delay")
});
// Callback with array
 const numbers = [1, 2, 3, 4, 5];

 numbers.forEach((num) => {
    console.log("Number: ", num)
 });

 //Callback with Async Operation
 function fetchData(callback) {
    console.log("Fetching Data....");
    setTimeout(() => {
        const data = {id :1, name: "Agile Guide"};
        callback(null, data)
    }, 3000);

 };

 fetchData((error, result) => {
    if (error){
        console.log("Error", error)
    }else{

        console.log("Data received:(callback) ", result);
    };
 });
//  Callbacks are powerful, but they can lead to callback hell (nested callbacks). To avoid this, modern JavaScript often uses Promises or async/await.



