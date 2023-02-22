var mymap = L.map("map").setView([46.524174386473064, -88.43880510790551], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnVmZmFsbzAxNjMiLCJhIjoiY2xkdGZtY2x6MTBmajNvbzZ4MnlnMGZwdCJ9.h5ZouR4hbLVdckM9ayqkMg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
var myIcon1 = L.icon({
    iconUrl: 'images/myicon(1).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'images/myicon(2).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/myicon(3).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/myicon(4).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/myicon(5).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/myicon(6).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/myicon(7).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/myicon(8).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/myicon(9).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/myicon(10).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon11 = L.icon({
    iconUrl: 'images/myicon(11).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon12 = L.icon({
    iconUrl: 'images/myicon(12).png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var Mackinac = L.marker([45.86406262025379, -84.627685466272246], {icon: myIcon1}).bindPopup("<b>Mackinac Island").addTo(mymap);
var Pictured = L.marker([46.57067802522319, -86.32512920362659], {icon: myIcon2}).bindPopup("<b>Pictured Rocks").addTo(mymap);
var Presque = L.marker([46.58715899389561, -87.38146269323227], {icon: myIcon3}).bindPopup("<b>Presque Isle").addTo(mymap);
var Marquette = L.marker([46.53370484179064, -87.41174927745959], {icon: myIcon4}).bindPopup("<b>Marquette").addTo(mymap);
var Sault = L.marker([46.48792324104616, -84.36066636048835], {icon: myIcon5}).bindPopup("<b>Sault Ste. Marie").addTo(mymap);
var Copper = L.marker([47.474564593523645, -87.90271324237835], {icon: myIcon6}).bindPopup("<b>Copper Harbor").addTo(mymap);
var Escanaba = L.marker([45.743250655145744, -87.07386294357703], {icon: myIcon7}).bindPopup("<b>Escanaba").addTo(mymap);
var Iron = L.marker([45.823156994312875, -88.06308372659947], {icon: myIcon8}).bindPopup("<b>Iron Mountain").addTo(mymap);
var Lanse = L.marker([46.75805222576313, -88.4521548677688], {icon: myIcon9}).bindPopup("<b>L'Anse").addTo(mymap);
var StIgnace = L.marker([45.87633110950728, -84.72855557664157], {icon: myIcon9}).bindPopup("<b>St.Ignace").addTo(mymap);
var Manistique = L.marker([45.958888296201316, -86.23989133626641], {icon: myIcon10}).bindPopup("<b>Manistique").addTo(mymap);
var Ontonagon = L.marker([46.87278313862981, -89.30791659989826], {icon: myIcon11}).bindPopup("<b>Ontonogon").addTo(mymap);