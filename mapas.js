// icono de autibuses.

var BusIcon = L.icon({
    iconUrl: 'bus.png',

    iconSize:[50, 60], // Tamaño del icono.
});

var map = L.map('map').
setView([37.174320, -3.598454],
15);

var mapLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18, 
}).addTo(map);

/*
map.addLayer(L.tileLayer);
*/

var googleLayer = new L.Google();
map.addLayer(googleLayer);

var googleRoadmapLayer = new L.Google('ROADMAP');
map.addLayer(googleRoadmapLayer);

/* Aqui va la capa con los markets*/

var LosDiamantes= L.marker([37.169413, -3.599356]).bindPopup('Bar-aliatar: 2€'),
    Bar2	= L.marker([37.179966, -3.600563]).bindPopup('Tacon flamenco: 2€'),
    Bar3	= L.marker([37.174283, -3.598109]).bindPopup('Comentario POPUP'),
    Bar4	= L.marker([37.173417, -3.597709]).bindPopup('Comentario POPUP');

var Bares = L.layerGroup([LosDiamantes,Bar2,Bar3,Bar4]);

// capa de las lineas de autobuses.
var autobuses =L.marker([37.176448, -3.597781],{icon: BusIcon}).addTo(map).bindPopup('Parada 414: SN1,LAC'),
	bus1 =L.marker([37.172618, -3.599508],{icon: BusIcon}).addTo(map).bindPopup('Parada 74: SN1,121(nocturno),LAC'),
	bus2 =L.marker([37.175482, -3.596622],{icon: BusIcon}).addTo(map).bindPopup('Parada 487: C5'),
	bus3 =L.marker([37.172439, -3.597167],{icon: BusIcon}).addTo(map).bindPopup('Parada 1434: C5'),
	bus4 =L.marker([37.177051, -3.59522],{icon: BusIcon}).addTo(map).bindPopup('Parada 1105: C1,C2'),
	bus5 =L.marker([37.173636, -3.595364],{icon: BusIcon}).addTo(map).bindPopup('Parada 1351: C3,C4');

var bus = L.layerGroup([autobuses,bus1,bus2,bus3,bus4,bus5]);

/*------------------------------------------------*/

var baseMaps = {
	'Google Roadmap' : googleRoadmapLayer,
	'Google' : googleLayer,
	'leaflet' : mapLayer
};

var overlayMaps = {"Bares": Bares, "bus": bus};



L.control.layers(baseMaps,overlayMaps).addTo(map);


L.control.scale().addTo(map);

/*
map.locate({setView: true, maxZoom: 15});

function onLocationFound(e) {

	L.marker(e.latlng).addTo(map);

	var	p1 = new L.LatLng(37.188076, -3.614460),
		p2 = new L.LatLng(37.184042, -3.604847),
		p3 = new L.LatLng(37.183153, -3.609954),
		polygonPoints = [p1, p2, p3];
	var polygon = new L.Polygon(polygonPoints);
	map.addLayer(polygon);

}

map.on('locationfound', onLocationFound);

*/
