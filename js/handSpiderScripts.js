// mapboxgl.accessToken = 'pk.eyJ1IjoibWNrZW9udCIsImEiOiJjajBiYnF4OTQwM2Y1MndwZzNob3FsMmV5In0.n-FVooZFRrMBcFpArgZbuw';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mckeont/cj0bkozt0002g2smcku4euw7r'
// });
$(document).ready(function() {
  //new icon parameters
//
var piDay = L.icon({
      iconUrl: 'js/images/piDay.png', //source, Tom created
      iconSize: [64, 64],
      iconAnchor: [0, 0],
      popupAnchor: [-1, -5],
});
console.log(piDay);
//
var woodLand = L.icon({
  iconUrl: 'js/images/birdSanct.png',
  iconSize: [64, 64],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});
L.marker([0, 0], {icon: woodLand}).addTo(map);
// console.log(woodLand);
//
var chipperSnippet = L.icon({
      iconUrl: 'js/images/chipperSnippet.png', //source, Tom created
      iconSize: [64, 64],
      iconAnchor: [0, 0],
      popupAnchor: [-1, -5],
});
console.log(chipperSnippet);

// //markers for new icon
var marker1 = L.marker([38.54709138531694,-109.45404052734375],{
  icon: piDay
}).addTo(map).bindPopup("Handspider Headquarters").openPopup();
//
// console.log(marker1);
//
var marker2 = L.marker([39.7789912112384,-104.99633789062499],{
  icon: chipperSnippet
}).addTo(map).bindPopup("Save Watersheds").openPopup();

//create marker button
$("#handSpiderCommunity").click(function(){
   map.setView([38.942320,-108.8195]);
   map.setZoom(6);
});

$("#chipperSnippet").click(function(){
   map.setView([39.7789912112384,-104.99633789062499]);
   map.setZoom(6);
});

$("#woodLand").click(function(){
   map.setView([42.418628, -76.849471]);
   map.setZoom(9);
});

function woodIcon(feature, layer){
  layer.setIcon({icon: woodLand});
  console.log(layer);
}
console.log("hi");
console.log("woodlanders", woodLanders);
var layerPlottedWoodLanders = L.geoJson(woodLanders,
  {
    pointToLayer: function (feature, latlng) {
      console.log(feature, latlng);
      L.marker(latlng, {icon: woodLand}).addTo(map);
    }}).bindPopup(function (layer) {
      return layer.feature.properties.name;
    }).addTo(map);




L.geoJSON(politics, {
    style: function(feature) {
        switch (feature.properties.name) {
            case 'handSpiders': return {color: "#ff0000"};
            case 'The Resistance': return {color: "#0000ff"};
        }
    }
}).addTo(map);
console.log(politics);

var bufferedPoint = turf.buffer(woodLanders, 1, 'miles');
L.geoJSON(bufferedPoint).addTo(map);
// console.log(bufferedPoint);
});
