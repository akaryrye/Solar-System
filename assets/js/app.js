let url = "";
let query = "";

$('#test-button').on('click', function () {

    query = $("input").val();
    console.log(query);

    url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}`;

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/" + url,
        method: "POST"
    }).then(function (response) {
        console.log(response);
        $("#test").empty();
        for (let i = 0; i < 10; i++) {
            let extract = response.query.search[i].snippet;
            $("#test").append(`<h3>${i}: ${extract}</h3>`)
        }
    });
})


//api.php?action=query&prop=extracts&exchars=175