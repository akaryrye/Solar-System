let url = "";
let query = "";

// Wikipedia URL: https://en.wikipedia.org/wiki/ + (data:planet name)

// queries wikipedia
$('.planet').on('click', function (e) {
    e.preventDefault
    query = $(this).attr("data");
    url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&titles=${query}`;

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

let nasaKEY = "ejYfEsz7YUb0d2SpoVde1mSoOdWgiYBAL1jKWbwO"
let nasaURL = "https://api.nasa.gov/planetary/apod?api_key="

$.ajax({
    url: nasaURL + nasaKey,
    success: function (result) {
        if ("copyright" in result) {
            $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
            $("#copyright").text("Image Credits: " + "Public Domain");
        }

        if (result.media_type == "video") {
            $("#apod_img_id").css("display", "none");
            $("#apod_vid_id").attr("src", result.url);
        }
        else {
            $("#apod_vid_id").css("display", "none");
            $("#apod_img_id").attr("src", result.url);
        }
        $("#reqObject").text(url);
        $("#returnObject").text(JSON.stringify(result, null, 4));
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
    }
});
