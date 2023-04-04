// AJAX

$.ajax({
  method: "GET",
  url: "some.api.com",
})
  .done(function (res) {
    console.log(res);
  })
  .fail(function () {
    // do something
  });

// Creates an XMLHttpRequest under the hood

// $.get shorthand

// all you really need -
$.get("https://api.github.users/ryanaanderson0")
  // can chain .done and .fail to shorthand
  .done(function (data) {
    console.log(data);
  });
