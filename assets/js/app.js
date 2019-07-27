$('#test').text("this is a test")

const apiKey = "";

let query = "earth";
let url = `https://en.wikipedia.org/w/api.php?action=query&format=json&meta=siteinfo&titles=${query}&utf8=1&prop=description&prop=extracts`

// test api call for media wiki:

/*
$.ajax({
    type: "GET",
    url:
      "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/",
    headers: { "user-key": "bc5ec19a8a53a21a05c11c232c6edc9f" }
  });
*/

$.ajax({
    url: "https://cors-anywhere.herokuapp.com/" + url,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });


  //https://test.wikipedia.org/w/api.php?action=centralauthtoken&format=json