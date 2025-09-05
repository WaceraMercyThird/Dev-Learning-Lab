function doStep1() {
    return new  Promise(resolve =>
        setTimeout(() => resolve("Step 1 Complete"), 1000)
    );
}

function doStep2(input) {
    return new Promise(resolve => {
        setTimeout(() => resolve(input + "Step 2 Complete"), 1000)
    });
};

function doStep3(input) {
    return new Promise(resolve=> {
        setTimeout(() => resolve(input + "Step 3 Complete"), 1000)
    });
}

//Chaining
doStep1()
.then(result1 => doStep2(result1))
.then(result2 => doStep3(result2))
.then(result3 => console.log("Final result (Promise):", result3))
.catch(err => console.error(err));