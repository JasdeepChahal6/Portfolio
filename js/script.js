//LeafLet Map
var map = L.map('map').setView([39.965593,-74.805349], 13); //Latitude and Longitude in brackets to set location, 13 is number of zoom, the lower the further

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);