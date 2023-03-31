var btn = document.querySelector("#button");

btn.addEventListener("click", function () {
  var url = "https://api.github.com/users/ryanaanderson0";
  fetch(url)
    .then(function () {
      // using request.ok will catch bad requests (404's)
      if (!request.ok) {
        console.log("ERROR WITH RESPONSE STATUS!");
      }
      console.log("EVERYTHING IS OK");
    })
    .catch(function () {
      console.log("THERE'S BEEN A PROBLEM");
    });
});

/* 
    Catch will run when the users internet is having issues, not a 404 bad request
        - to access the bad request, use request.ok

    You can make a custom function to handle errors
        - 

*/

// Handiling Fetch Errors

var btn = document.querySelector("#button");

btn.addEventListener("click", function () {
  var url = "https://api.github.com/users/ryanaanderson012341234123";
  fetch(url)
    .then(function (request) {
      if (!request.ok) {
        throw Error(request.status);
      }
      return request;
    })
    .then(function (request) {
      console.log("EVERYTHING IS OK");
    })
    .catch(function (error) {
      console.log(error);
    });
});
