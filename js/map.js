function initMap() {
  var uluru = {lat: 40.7128, lng: -74.0060};
  //  console.dir(uluru.lat);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  setMarkers(map);
}

function setMarkers(map) {
  // console.log(viewModel.places()[0].name());
  // console.log(viewModel.places().length);
  // console.log(viewModel.filteredItems().length);
  // console.log(viewModel.filteredItems()[0].name());
  for (var i = 0; i < viewModel.filteredItems().length; i++) {
    var loc = viewModel.filteredItems()[i];
  // console.log(loc.latitude());
    var marker = new google.maps.Marker({
      position: {lat:loc.latitude(), lng: loc.longitude()},
      map: map,
      animation: google.maps.Animation.DROP,
      title: loc.name()
    //  zIndex: beach[3]
    });
  }
}


//Marker Bounce on Map
// marker.addListener('click', toggleBounce);
// function toggleBounce() {
// if (marker.getAnimation() !== null) {
//   marker.setAnimation(null);
// } else {
//   marker.setAnimation(google.maps.Animation.BOUNCE);
// }
// }
