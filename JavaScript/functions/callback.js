function doStep1(callback){
    setTimeout(() => callback(null, "Step 1 complete"), 1000);
};

function doStep2(input, callback){
    setTimeout(() => callback(null, input + "-> Step 2 complete"), 1000);
};

function doStep3(input, callback){
    setTimeout(() => callback(null, input + "-> Step 3 complete"), 1000);
};


doStep1((err, result1) => {
    if (err) return console.error(err);
    doStep2(result1, (err, result2) => {
        if (err) return console.error(err);
            doStep3(result2, (err, result3) => {
                if (err) return console.error(err);
                console.log("Final result (callback):", result3);
        });
    });
});