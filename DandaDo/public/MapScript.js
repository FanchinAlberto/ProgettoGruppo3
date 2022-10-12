//uso la proprietà bounds per far rimbalzare e limitare i confini
const corner1 = L.latLng(88.45202, -178.158921)
const corner2 = L.latLng(-85.4719, 179.028579)
const bounds = L.latLngBounds(corner1, corner2);

//core della mappa
var map = L.map('map', {
    center: [45.545312, 11.544571], 
    zoom: 11,
    minZoom: 3,
    maxZoom: 17,    
    maxBounds: bounds,
    
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




//marker 

var markerAM = L.marker([45.478482, 11.609105],
    ).addTo(map) 
    .bindPopup('Alessandro Michelazzo è qui <br> <img src="Ale.jpeg" class="immagine"></img>');

var markerAF = L.marker([45.525638, 11.564612],
    {alt: 'Vicenza'}).addTo(map) 
    .bindPopup('Alberto Fanchin è qui <br> <img src="Fanc.jpeg" class="immagine"></img>');

var markerAD = L.marker([45.505693, 11.414956],
    {alt: 'Vicenza'}).addTo(map) 
    .bindPopup('Alessandro Dandea è qui <br> <img src="Dande.jpg" class="immagine"></img>');
    
    
    
    //control scale
L.control.scale().addTo(map);