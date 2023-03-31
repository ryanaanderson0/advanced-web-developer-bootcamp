// Grab the html elements
var button = document.querySelector("#btn");
var price = document.querySelector("#price");

// Add an event listener to the button
button.addEventListener("click", function () {
  // Make the http call in the event listener
  var XHR = new XMLHttpRequest();
  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      // To work with the data, we need to parse it to JSON format
      var rate = "$" + data.bpi.USD.rate;
      price.innerText = rate;
    }
  };

  XHR.open("GET", url);
  XHR.send();
});

/* TODO: Additional Features to add: 

    - Set price in a variable
    - Set up a browser event to update the price when the browser loads
    - Implement radio buttons for the user to update the currentcy: (USD, GBP, etc..)

*/
