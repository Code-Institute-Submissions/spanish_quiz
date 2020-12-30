function initMap() {
  const myLatLng = { lat: 53.31952608924311, lng: -6.2276343192623775 };   
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatLng,
  });
}

