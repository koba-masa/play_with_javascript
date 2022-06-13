function initMap() {
  const center_place = { lat: 35.9037556, lng: 139.7831018 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: center_place,
  });
  new google.maps.Marker({
    position: center_place,
    map: map,
  });

  const latlngs = [
    { lat: 35.9018879, lng: 139.7777432 },
    { lat: 35.9019922, lng: 139.7790138 },
    { lat: 35.9029922, lng: 139.7790139 },
  ];

  latlngs.forEach(latlng => {
    var latlng_ins = new google.maps.LatLng(latlng.lat, latlng.lng);
    new google.maps.Marker({position: latlng_ins, map: map,});
  });
}

window.initMap = initMap;
