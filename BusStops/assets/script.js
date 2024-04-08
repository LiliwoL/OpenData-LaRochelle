axios.get(
    './shell/BusStops.json',
    {
        headers: {
            "Cache-Control": "no-cache",
            'Content-Type': 'application/json',
        }
    }
)
    .then(function (response) {
        // handle success
        console.clear();

        response.json().then(data => {
            console.log(data);
            data.forEach(busStop => {
                console.log(busStop);
                // Create a marker and add it to the map
                //var marker = L.marker([51.5, -0.09]).addTo(map);
                var marker = L.marker([busStop.lat, busStop.lon]).addTo(map);
                marker.bindPopup(busStop.name);
            });
        });

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });


// Create a map object and set the view to the default location
var map = L.map('map').setView([46.160328, -1.151139], 16);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



