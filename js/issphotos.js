$(document).ready(function() {


  $(".btn").on("click", function(){
    var userLocation = $("#location").val().trim();
    var googleApiURL = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiURL += "key=AIzaSyCuJleuoSrg7Q8ZFUBEogGFre0viUTqj4E";
    googleApiURL += "&address=" + userLocation;
  });

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


// Google maps api key:   AIzaSyCuJleuoSrg7Q8ZFUBEogGFre0viUTqj4E

// Key:
// 3b0e27fb11cf8491cc65ec8b7ca879f8

// Secret:
// ffaf2acbb179633a