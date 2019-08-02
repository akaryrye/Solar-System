let url = "";
let query = "";


// queries wikipedia
$('.planet').on('click', function (e) {
    e.preventDefault
    query = $(this).attr("data");
    url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&titles=${query}`;
    console.log("clicked")
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/" + url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#test").empty();
        let key = Object.keys(response.query.pages)[0]
        $("#test").html(response.query.pages[key].extract)
    });
})
