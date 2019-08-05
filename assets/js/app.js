// Queries wikipedia
$('.satellite').on('click', function (e) {
    e.preventDefault
    let queryOne = $(this).attr("data");
    let queryTwo = $(this).attr("data2");
    let wikiURL = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&titles=${queryOne}`;
    let planetsURL = `https://cors-anywhere.herokuapp.com/https://dry-plains-91502.herokuapp.com/planets/${queryTwo}`;

    //$("#nasa").html(`<img src='assets/images/modal/${queryTwo}-modal.jpg'></img>`);
    $("#nasa").html(`<img src='assets/images/modal/${queryTwo}-modal.gif'></img>`);

    // Planets API  
    $.ajax({
        url: planetsURL,
        method: "GET"
    }).then(function (planet) {
        $("#planet-stats").empty();
        $("#modal-title").empty();
        $("#modal-title").html(`<h2>${planet.name}</h2>`);
        $("#planet-stats").html(
            `<ul>
                <li>Mass: ${planet.mass} 10<sup>24</sup> kg</li>
                <li>Diameter: ${planet.diameter}  km</li>
                <li>Density: ${planet.density} kg/m<sup>3</sup></li>
                <li>Gravity: ${planet.gravity} m/s<sup>2</sup></li>
                <li>Rotation Period: ${planet.rotation_period} hours</li>
                <li>Length of Day: ${planet.length_of_day} hours</li>
                <li>Distance From Sun: ${planet.distance_from_sun} 10<sup>6</sup> km</li>
                <li>Orbital Period: ${planet.orbital_period} Earth days</li>
                <li>Orbital Velocity: ${planet.orbital_velocity} km/s</li>
                <li>Mean Temperature: ${planet.mean_temperature} C</li>
                <li>Number of Moons: ${planet.number_of_moons}</li>
            </ul>`);
    });

    // Wikipedia API
    $.ajax({
        url: wikiURL,
        method: "GET"
    }).then(function (response) {
        $("#test").empty();
        let key = Object.keys(response.query.pages)[0];
        $("#wiki").html(response.query.pages[key].extract);

        // "Un-Hide" modal element
        $("#myModal").css("display", "block");
    });
});

// Hide modal on click
$(".close").on("click", function () {
    $("#myModal").css("display", "none");
});

$(document).on("click", $("#myModal"), function () {
    $("#myModal").css("display", "none");
});