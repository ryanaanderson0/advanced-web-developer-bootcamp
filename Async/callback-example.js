// Callback Example:

function callback() {
    console.log("Coming from callback");
}

function higherOrder(fn) {
    console.log("About to call callback");
    fn();
    console.log("Callback has been invoked");
}

higherOrder(callback);


// Callback using anonyomus function

function greet(name, formatter) {
    return "Greetings, " + formatter(name);
}

greet("Ryan", function(name) {
    name = name.toUpperCase();
    return console.log(name);
});

greet("Ryan", function(name) {
    name += "!!!!";
    console.log(name);
})