// XML HTTP Requests Example
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    // Check if the status code is 4 aka request is done
    if(XHR.readyState == 4) {
        // Check the status code of the request
        if(XHR.status == 200) {
            XHR.responseText;
            console.log(XHR.responseText);
        } else {
            console.error("There was a problem");
        }      
    }
}

// .open is where you define what request to make
XHR.open("GET", "https://api.github.com/zen");
// Send the request
XHR.send();