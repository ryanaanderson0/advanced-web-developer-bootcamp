setTimeout(function() {
    console.log( "Wait for it....");
}, 2000);

function countDown(seconds) {
    var interval = setInterval(function() {
        
        if(seconds > 0) {
            console.log("Timer: ", seconds);
            seconds--;
        } else {
            console.log(" Ring Ring Ring!!!");
            clearInterval(interval);
        }
    }, 1000);
}

countDown(2);