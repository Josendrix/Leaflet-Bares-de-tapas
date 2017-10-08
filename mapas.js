function leaflet (){
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
		maxZoom: 19,
		minZoom: 14,
		}).addTo(map);

/*
map.addLayer(L.tileLayer);
*/

	var googleLayer = new L.Google();
	map.addLayer(googleLayer);
	var googleRoadmapLayer = new L.Google('ROADMAP');
	map.addLayer(googleRoadmapLayer);
	var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
	var streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr, maxZoom: 17, minZoom: 14.0});






/* Aqui va la capa con los markets*/

	var Bar1	= L.marker([37.169413, -3.599356]).bindPopup('<b>Bar-Aliatar</b><br>Precio: 2€'),
	    Bar2	= L.marker([37.179966, -3.600563]).bindPopup('<b>Tacon flamenco</b><br>Precio: 2€'),
	    Bar3	= L.marker([37.174198, -3.598251]).bindPopup('<b>La Blanca Paloma</b><br>No se puede elegir la tapa<br>Tapa escasa<br>Poca variedad de tapas<br>Es más bien restaurante por raciones<br>Precio:2.1€<br>Tapa probada: Berengenas fritas'),
	    Bar4	= L.marker([37.173455, -3.597831]).bindPopup('<b>Las Copas</b><br>No se puede elegir la tapa<br>Tapa escasa<br>Precio: 2.20€<br>Tapa probada: Boquerones en vinagre'),
	    Bar5	= L.marker([37.173204, -3.597239]).bindPopup('<b>La Chopera</b><br>No se pujede elegir la tapa<br>Buena tapa pero de tamaño normalito<br>Precio: 2.10€<br>Tapa probada: Mini rosca de jamón con tomate y aceitunas');

	var Bares = L.layerGroup([Bar1,Bar2,Bar3,Bar4,Bar5]);

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
		'leaflet' : mapLayer,
		'Mapa Callejero' : streets
	};


	var overlayMaps = {"Bares": Bares, "bus": bus};


	L.control.layers(baseMaps,overlayMaps).addTo(map);

	map.dragging.disable(); //no permite mover el mapa
        map.doubleClickZoom.disable();//no zoom doble click
        map.scrollWheelZoom.disable();//no zoom rueda raton
        map.keyboard.disable(); //no movimiento con teclado
        map.removeControl(map.zoomControl); //desabilita los botones para el zoom








var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["Autobuses . . . .", "Bares de tapas"],
        labels = ["bus.png","./leaflet/images/marker-icon.png"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            grades[i] + (" <img src="+ labels[i] +" height='50' width='40'>") +'<br>';
    }

    return div;
};

legend.addTo(map);


/*L.control.scale().addTo(map);


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
}
