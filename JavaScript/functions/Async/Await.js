function doStep1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 1 Complete"),1000)
    });
}

function doStep2(input) {
    return new Promise(resolve => {
        setTimeout(()=> resolve(input + "-> Step 2 Complete"), 1000)
    });
}

function doStep3(input) {
    return new Promise(resolve => 
        setTimeout(() => resolve(input + "Step 3 Complete"), 1000)
    );
}

async function runSteps() {
  try {
    const result1 = await doStep1();
    const result2 = await doStep2(result1);
    const result3 = await doStep3(result2);
    console.log("Final result (async/await):", result3);
  } catch (error) {
    console.error(error);
  }
}

runSteps();
