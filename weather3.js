window.addEventListener("load", () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
        });
    };
});

$(".btn").on("click", function() {
    var cityName = $("#input").val().trim();
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=c9f15487213d5d7d3c4bee427f8f0646";

    $()
}