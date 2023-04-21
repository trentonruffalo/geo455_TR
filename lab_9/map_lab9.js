var mymap = L.map('map', {
    center: [43.0186, -89.5498],
    zoom: 8,
});

var grayscale = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
    maxZoom: 11,
    minZoom: 2,
}).addTo(mymap);



var migrationLayer = new L.migrationLayer({
    map: mymap,
    data: data,
    pulseRadius:30,
    pulseBorderWidth:3,
    arcWidth:1,
    arcLabel:true,
    arcLabelFont:'10px sans-serif',
    maxWidth:10,
});

migrationLayer.addTo(mymap);

var counties = L.geojson(poly, {
 style: function (feature) {
        return {fillOpacity: 0.5, weight: 2, color: feature.properties.color};
    },
    onEachFeature: function(feature, featureLayer) {
        featurelayer.bindTooltip(feature.properties.Name, {permanent:false, direction:'right'});
    }
}).addTo(mymap);

 function hide(){
            migrationLayer.hide();
        }
        function show(){
            migrationLayer.show();
        }
        function play(){
            migrationLayer.play();
        }
        function pause(){
            migrationLayer.pause();
        }
