<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />

	<style>
	#map { 
    	width: 100%;
    	height: 580px;
    	box-shadow: 5px 5px 5px #888;
 	}

	</style>
</head>
	<body>
		<div id="map"></div>
		<script>
  		var map = L.map('map').
     		setView([37.185748, -3.610183],
     		15);

		L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(map);

 	
L.control.scale().addTo(map);

L.marker([37.185748, -3.610183],{draggable: true}).addTo(map);
		</script>



	</body>
</html>
