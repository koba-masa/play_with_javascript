function initMap() {
  const center_place = { lat: 35.9037556, lng: 139.7831018 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: center_place,
  });
  const marker = new google.maps.Marker({
    position: center_place,
    map: map,
  });
}

window.initMap = initMap;
