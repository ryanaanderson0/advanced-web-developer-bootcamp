const randomNumPromise = new Promise(function(resolve, reject) {
    let num = Math.random();
    if(num > 5) {
        resolve(num);
    } else {
        reject(num);
    }
})

randomNumPromise.then(function(result) {
    console.log("Number resolved: ", result);
}).catch(function(error){
    console.log("Number rejected", error);
})