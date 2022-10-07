
//uso la proprietà bounds per far rimbalzare e limitare i confini
const corner1 = L.latLng(88.45202, -178.158921)
const corner2 = L.latLng(-85.4719, 179.028579)
const bounds = L.latLngBounds(corner1, corner2);

//core della mappa
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 3,
    minZoom: 3,
    maxZoom: 17,
    maxBounds: bounds
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//creo un segnaposto
var marker = L.marker([51.5, -0.09]).addTo(map);

//creo un cerchio
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

//creo un poligono
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

//popup quando clicchi sopra                              lo apre appena carica la mappa
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup1 = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);//usiamo openOn invece di addTo perché gestisce la chiusura automatica di un popup precedentemente aperto all'apertura di uno nuovo, il che è positivo per l'usabilità.


//ti dice dove punti e cliccki
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

//marker preciso
var marker1 = L.marker([50.4501, 30.5234],
    {alt: 'Kyiv'}).addTo(map) // "Kyiv" is the accessible name of this marker
    .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');

    
L.control.scale().addTo(map);

    