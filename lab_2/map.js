var mymap = L.map("map").setView([45.68188552665935, -111.05834307811382], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnVmZmFsbzAxNjMiLCJhIjoiY2xkdGZtY2x6MTBmajNvbzZ4MnlnMGZwdCJ9.h5ZouR4hbLVdckM9ayqkMg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([45.68188552665935, -111.05834307811382])
    .addTo(mymap)
    .bindPopup("<b>Hello!</b><br>I am Bozeman,Montana.")
    .openPopup();