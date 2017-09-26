var map = L.map('map').
setView([37.185748, -3.610183],
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

var baseMaps = {
	'Google Roadmap' : googleRoadmapLayer,
	'Google' : googleLayer,
	'leaflet' : mapLayer
};


L.control.layers(baseMaps,null).addTo(map);


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
