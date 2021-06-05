// Create a map
var mymap = L.map('map', {
  center: [47.425, -121.849],
  zoom: 9,
});


// Map layers. Composite starts as the basemap
var composite = L.tileLayer(
'https://api.mapbox.com/styles/v1/saschu/ckpivmmz41qdl18o5q0pd9ioe/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FzY2h1IiwiYSI6ImNrZ3poNGVkYjA1b3Ayd3JzOHczb29iNjEifQ.MqXTIcUhZl4C-s0Jk5o49A', {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    attribution: 'Map tiles by <a href="https://www.mapbox.com/">MapBox</a> | Data from <a href="https://www.psrc.org/opportunity-mapping">The Puget Sound Regional Council</a>',
});
var reading = L.tileLayer(
'https://api.mapbox.com/styles/v1/saschu/ckpix0o0h2d5s17qwjwujpra2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FzY2h1IiwiYSI6ImNrZ3poNGVkYjA1b3Ayd3JzOHczb29iNjEifQ.MqXTIcUhZl4C-s0Jk5o49A', {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    attribution: 'Map tiles by <a href="https://www.mapbox.com/">MapBox</a> | Data from <a href="https://www.psrc.org/opportunity-mapping">The Puget Sound Regional Council</a>',
});
var math = L.tileLayer(
'https://api.mapbox.com/styles/v1/saschu/ckpiyj91010l318p99lnrk34m/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FzY2h1IiwiYSI6ImNrZ3poNGVkYjA1b3Ayd3JzOHczb29iNjEifQ.MqXTIcUhZl4C-s0Jk5o49A', {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    attribution: 'Map tiles by <a href="https://www.mapbox.com/">MapBox</a> | Data from <a href="https://www.psrc.org/opportunity-mapping">The Puget Sound Regional Council</a>',
});
var poverty = L.tileLayer(
'https://api.mapbox.com/styles/v1/saschu/ckpiz7xmf445r17njnpizgbst/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FzY2h1IiwiYSI6ImNrZ3poNGVkYjA1b3Ayd3JzOHczb29iNjEifQ.MqXTIcUhZl4C-s0Jk5o49A', {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    attribution: 'Map tiles by <a href="https://www.mapbox.com/">MapBox</a> | Data from <a href="https://www.psrc.org/opportunity-mapping">The Puget Sound Regional Council</a>',
});
var qualifications = L.tileLayer(
'https://api.mapbox.com/styles/v1/saschu/ckpizezmy0eoo18tdsczy5w64/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FzY2h1IiwiYSI6ImNrZ3poNGVkYjA1b3Ayd3JzOHczb29iNjEifQ.MqXTIcUhZl4C-s0Jk5o49A', {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    attribution: 'Map tiles by <a href="https://www.mapbox.com/">MapBox</a> | Data from <a href="https://www.psrc.org/opportunity-mapping">The Puget Sound Regional Council</a>',
});
var graduation = L.tileLayer(
'https://api.mapbox.com/styles/v1/saschu/ckpizjxxu385d17nyrgumfbjy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FzY2h1IiwiYSI6ImNrZ3poNGVkYjA1b3Ayd3JzOHczb29iNjEifQ.MqXTIcUhZl4C-s0Jk5o49A', {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    attribution: 'Map tiles by <a href="https://www.mapbox.com/">MapBox</a> | Data from <a href="https://www.psrc.org/opportunity-mapping">The Puget Sound Regional Council</a>',
});

// Putting layers onto the map
composite.addTo(mymap);

// Layer control
var maplayers = {
  "<b>Weighted Composite</b>": composite,
  "Reading Test Scores": reading,
  "Math Test Scores": math,
  "Student Poverty Rates (reversed)": poverty,
  "Teachers' Qualifications": qualifications,
  "Graduation Rates": graduation
};

L.control.layers(maplayers).addTo(mymap);

// Legend
var Legend = L.control({position: 'bottomleft'});
Legend.onAdd = function (mymap) {
  var div = L.DomUtil.create('div', 'info legend');
  div.innerHTML += "<iframe src='" + "images/legend.png" + "' width='130' height='130' frameborder='0' scrolling='no'></iframe>"
    return div;
};
Legend.addTo(mymap);
