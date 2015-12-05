$(document).ready(function() {
  

// OPEN NOTIFY - ISS LOCATION API
function issLocator(){
  $.ajax({
    // TODO pass LAT and LON data to url to get current location
    url: 'http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON',
    type: 'GET',
    dataType: 'json',
    // TODO manipulate data on success.
  });
}

});