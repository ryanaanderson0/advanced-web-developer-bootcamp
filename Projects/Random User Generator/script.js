var button = document.querySelector("#btn");
var photo = document.querySelector("#photo");
var fullName = document.querySelector("#name");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

var url = "https://randomuser.me/api";

button.addEventListener("click", function () {
  fetch(url)
    .then(function (request) {
      if (!request) {
        throw new Error(request.status);
      }

      return request;
    })
    .then(function (request) {
      return request.json();
    })
    .then(function (data) {
      console.log(data);
      var result = data.results[0];
      photo.src = result.picture.large;
      fullName.innerText = result.name.first + " " + result.name.last;
      email.innerText = result.email;
      city.innerText = result.location.city;
    })
    .catch(function (error) {
      console.log(error);
    });
});

// TODO:

// 1. implement function that parses the return data and returns data.results[0], so we don't have to use that long tag every time we need to access the data
// 2. implement function that updates the HTML
