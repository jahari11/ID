mapboxgl.accessToken = 'pk.eyJ1IjoibG9uZWx5YmFja3VwMSIsImEiOiJjbG9rYzc0bWwxNnV1MnJwcTZlMGxlcmtvIn0.4tBkAmV_e1yvokcZvSmS6w';
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/lonelybackup1/clokcvmfu005f01pebo614x9e', // style URL
    center: [-74.0060, 40.7128], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker()
.setLngLat([-73.985428, 40.748817])
.addTo(map)

const markerTwo = new mapboxgl.Marker()
.setLngLat([-73.9465, 40.8116])
.addTo(map)