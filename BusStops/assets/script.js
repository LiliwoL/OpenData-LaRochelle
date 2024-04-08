axios.get(
    'BusStops.json',
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

        console.log(response.data);

        response.data.forEach(busStop => {
            // Create a marker and add it to the map
            let marker = L.marker([busStop.Latitude, busStop.Longitude]).addTo(map);
            marker.bindPopup(`<b>${busStop.Name}</b><br>${busStop.Id}`);
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



