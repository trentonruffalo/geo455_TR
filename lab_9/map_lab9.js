var mymap = L.map("map").setView([44.3870219, -89.6457912 ], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnVmZmFsbzAxNjMiLCJhIjoiY2xkdGZtY2x6MTBmajNvbzZ4MnlnMGZwdCJ9.h5ZouR4hbLVdckM9ayqkMg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
var migrationLayer = new L.migrationLayer({
            map: mymap,
            data: data,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
        migrationLayer.addTo(lrmap);

       
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
       