/*
    Make asynchronous code look synchronous
    While promises are cleaner, they're not perfect
    Can add bloat to code
    
    async/await
    Standard in many languages
    Syntax clsoer to synchronous code
*/

function promiseTimeout(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function simulateLongOperation() {
    await promiseTimeout(1000);
    return 42;
}

async function run() {
    const answer = await simulateLongOperation();
    console.log(answer);
}

// If error messages, use try/catch!
run();

console.log("--Demo--")
async function longRunningOperation() {
    // logic
    return 42;
}

async function run2() {
    // logic
    console.log("Start!!");
    await promiseTimeout(2000);

    const response = await longRunningOperation();
    console.log(response)
    
    console.log("Stop!!");
}
