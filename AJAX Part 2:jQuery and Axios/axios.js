var url = "https://opentdb.com/api.php?amount=1";

axios
  .get(url)
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function () {
    console.log("Err");
  });

// You can include dynamic parameters

axios.get("https://opentdb.com/api.php", {
  params: {
    amount: 1,
  },
});

// How to handle errors

axios
  .get("https://opentdb.com/api.php", {
    params: {
      amount: 1,
    },
  })
  .catch(handleErrors);

function handleErrors(err) {
  // Axios has built in methods for the response to specify errors with the request or response
  if (err.response) {
    // Error with the response data
  } else if (err.request) {
    // Error with the request url
  } else {
    // Catch all error response
  }
}
