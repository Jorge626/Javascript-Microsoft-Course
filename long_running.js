/*
    Certain operations can take a while:
    File I/O
    REST calls
    Database operations
    Complex computations

    Originally managed through callback

    Cascading becomes an issue
    ex.
    longRunningOperation(() => {
        anotherLongRunningOperation(() =>{
            yetAnother(() => {
                oneMore(() => {
                    lastOne(() => {
                        console.log('Where are we?');
                    })
                })
            })
        })
    });

    Enter promises:
    Commong developmetn pattern
    Cleaner version of callbacks

    Recent versions of JavaScript have built-in Promise object
    Long running operations typically return a Promise
*/

// Old way
function callback() {
    console.log('Timeout completed');
}

setTimeout(callback, 3000); // wait 3 seconds

// Promise Demo
console.log("--- Demo ---");
function promiseTimeout(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
        // setTimeout(reject, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log('done');
        return Promise.resolve(42);
    }).then((response) => {
        console.log(response);
    }).catch(() => {
        console.log('cool error handling');
    });

promiseTimeout(2000)
    .then(() => {
        console.log('Done!!');
        return promiseTimeout(1000);
    }).then(() => {
        console.log("Also Done!!");
        return Promise.resolve(42);
    }).then((result) =>{
        console.log(result)
    }).catch(() => {
        console.log('Error!');
    });