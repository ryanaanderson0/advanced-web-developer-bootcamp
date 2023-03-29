var btn = document.querySelector("#btn");
var image = document.querySelector("#photo");

btn.addEventListener("click", function() {
    // make request when clicked
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status == 200) {
            // To work with the data, we need to parse it to JSON format
            var url = JSON.parse(XHR.responseText).message;
            image.src = url;
        }
    }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();

 
})
