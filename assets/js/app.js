// Queries wikipedia
$('.planet').on('click', function (e) {
    e.preventDefault
    let query = $(this).attr("data");
    let wikiURL = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&titles=${query}`;
    let nasaKEY = "ejYfEsz7YUb0d2SpoVde1mSoOdWgiYBAL1jKWbwO"
    let nasaURL = "https://images-api.nasa.gov/search?q="

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/" + wikiURL,
        method: "GET"
    }).then(function (response) {
        $("#test").empty();
        let key = Object.keys(response.query.pages)[0]
        $("#test").html(response.query.pages[key].extract)
        modal.style.display = "block";
    });

    $.ajax({
        url: nasaURL + query,
        method: "GET"
    }).then(function (nasa) {
        console.log(nasa.collection.items[1].links[0])
        $("#nasa-test").html(`<img src='${nasa.collection.items[1].links[0].href}'></img>`);
    });
});

// Hide modal on click
$(".close").on("click", function () {
    $("#myModal").style.display = "none";
});

$(document).on("click", $("#myModal"), function (e) {
    $("#myModal").style.display = "none";
});