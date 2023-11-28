Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

// Example usage:
async function exampleUsage() {
    console.log('Start sleeping...');
    await sleep(3000); // Sleep for 3000 milliseconds (3 seconds)
    console.log('Finished sleeping!');
}

exampleUsage();

 
