var map = L.map('map').
setView([37.174320, -3.598454],
15);

var mapLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(map);

/*
map.addLayer(L.tileLayer);
*/

var googleLayer = new L.Google();
map.addLayer(googleLayer);

var googleRoadmapLayer = new L.Google('ROADMAP');
map.addLayer(googleRoadmapLayer);

/* Aqui va la capa con los markets*/

var LosDiamantes= L.marker([37.173712, -3.598304]).bindPopup('Comentario POPUP'),
    Bar2	= L.marker([37.173635, -3.598208]).bindPopup('Comentario POPUP'),
    Bar3	= L.marker([37.174283, -3.598109]).bindPopup('Comentario POPUP'),
    Bar4	= L.marker([37.173417, -3.597709]).bindPopup('Comentario POPUP');

var Bares = L.layerGroup([LosDiamantes,Bar2,Bar3,Bar4]);


/*------------------------------------------------*/

var baseMaps = {
	'Google Roadmap' : googleRoadmapLayer,
	'Google' : googleLayer,
	'leaflet' : mapLayer
};

var overlayMaps = {"Bares": Bares};


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
