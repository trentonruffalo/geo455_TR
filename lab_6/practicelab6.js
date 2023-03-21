// Create Mymap variable
var mymap = L.map('map', {
    center: [51.48882027639122, -0.1028811094342392],
              zoom: 11
          });

  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png',
}).addTo(mymap);         
  
function getColor(value) {
    return value > 139 ? '#54278f':
           value > 87  ? '#756bb1':
           value > 53  ? '#9e9ac8':
           value > 32  ? '#cbc9e2':
                         '#f2f0f7';
}
function style(feature){
    return {
        fillColor: getColor(feature.properties.pop_den),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

function highlightFeature(e) {
    // Get access to the feature that was hovered through e.target
    var feature = e.target;

    // Set a thick grey border on the feature as mouseover effect
    // Adjust the values below to change the highlighting styles of features on mouseover
    // Check out https://leafletjs.com/reference-1.3.4.html#path for more options for changing style
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    // Bring the highlighted feature to front so that the border doesn’t clash with nearby states
    // But not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature, // Do what defined by the highlightFeature function on mouseover
        mouseout: resetHighlight,    // Do what defined by the resetHighlight function on mouseout
    });
}

var geojson; // define a variable to make the geojson layer accessible for the function to use   
            
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

geojson = L.geoJson(data, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);


var legend = L.control({position: 'topleft'}); // Try the other three corners if you like.

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 32, 53, 87, 139]; // The break values to define the intervals of population, note we begin from 0 here

    div.innerHTML = '<b>Density per square unit area</b>'; // The legend title (HTML-based)

    // Loop through our the classes and generate a label with a color box for each interval.
    // If you are creating a choropleth map, you DO NOT need to change lines below.
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(mymap);









//Map 2


function getColor1(value1) {
    return value1 > 47 ? '#780202':
           value1 > 30 ? '#8f2701':
           value1 > 17 ? '#bd3d02':
           value1 > 11 ? '#e08f31':
                        '#f7d09c';
}

function style1(feature){
    return {
        fillColor: getColor1(feature.properties.dens_all),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

function highlightFeature1(e1) {
    var feature = e1.target;

    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

function onEachFeature1(feature, layer) {
    layer.on({
        mouseover: highlightFeature1, // Do what defined by the highlightFeature function on mouseover
        mouseout: resetHighlight1,    // Do what defined by the resetHighlight function on mouseout
    });
}

var density1; // define a variable to make the geojson layer accessible for the function to use   
            
function resetHighlight1(e1) {
    density1.resetStyle(e1.target);
}


density1 = L.geoJson(density1, {
    style:style1,
    onEachFeature: onEachFeature1
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.dens_all.toString() + ' people/hectare </p>';       
}).addTo(mymap);

var legend1 = L.control({position: 'topleft'});

legend1.onAdd = function (mymap) {
    
    var div = L.DomUtil.create('div', 'legend'),
    grades = [0, 11, 13, 17, 30, 47];
    
    div.innerHTML = '<b> English Speaking Households <br></b>';
    
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
               '<i style="background:' + getColor1(grades[i] + 1) + '"></i>' + grades[i] + (grades[i +1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    
    return div;
};
legend1.addTo(mymap)




//Set up the baselayers and WMS layer
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});

var topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'SRTM30-Colored-Hillshade'
});


// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    "Hillshade": topo,
    };

var overlays = {
    'Population Denisty': geojson,
    'Language': density1
               };

//Create the menu
 var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);
