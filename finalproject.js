$(document).ready(function() {
  
    $("#btn3").click(function(){
        $("#splasher2").fadeIn();
    });
    $("#btn4").click(function(){
        $("#splasher2").fadeOut();
    });
});

var greyscale = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 11,
   minZoom: 2
 });

var mymap = L.map('map', {
    center: [31.130003, -96.751845],
              zoom: 7,
              layers: greyscale
          });


//Add data

var airqualityhouston2010 = L.esri.tiledMapLayer({
    url: 'https://tiles.arcgis.com/tiles/uRm5PFNUDV7pDKUv/arcgis/rest/services/Houston_Air_Qual_2010_3/MapServer', 
    f: 'image'
 }).addTo(mymap);

airqualityhouston2010.bindPopup(function (error, featureCollection) {
    if (error || featureCollection.features.length === 0) {
        return false;
    }   else {
        return 'Air Quality: ' + featureCollection.features[0].properties.CLASS_DESC;
    }
});

var airqualitydallas2010 = L.esri.tiledMapLayer({
    url: 'https://tiles.arcgis.com/tiles/uRm5PFNUDV7pDKUv/arcgis/rest/services/Dallas_Air_Qual_2010_1/MapServer', 
    f: 'image'
 }).addTo(mymap);

airqualitydallas2010.bindPopup(function (error, featureCollection) {
    if (error || featureCollection.features.length === 0) {
        return false;
    }   else {
        return 'Air Quality: ' + featureCollection.features[0].properties.CLASS_DESC;
    }
});
var airqualitySA2010 = L.esri.tiledMapLayer({
    url: 'https://tiles.arcgis.com/tiles/uRm5PFNUDV7pDKUv/arcgis/rest/services/SA_Air_Qual_2010_1/MapServer', 
    f: 'image'
 }).addTo(mymap);

airqualitySA2010.bindPopup(function (error, featureCollection) {
    if (error || featureCollection.features.length === 0) {
        return false;
    }   else {
        return 'Air Quality: ' + featureCollection.features[0].properties.CLASS_DESC;
    }
});

L.geoJson(houstongas).addTo(mymap);
L.geoJson(SAnatgas).addTo(mymap);
L.geoJson(dallasgas).addTo(mymap);

var overlays = {
    'Air Quality for Houston 2010':airqualityhouston2010,
    'Air Quality for San Antonio 2010':airqualitySA2010,
	'Air Quality for Dallas 2010':airqualitydallas2010
};

 

//Creating the menu
var layerControl = L.control.layers({}, overlays, {collapsed: false}).addTo(mymap); //collapsed: true is defaults

              
