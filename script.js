// Initialize and add the map
function initMap() {
    const location = { lat: 22.503293507204816, lng: 88.33910819731466 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom:10,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
  window.initMap = initMap;