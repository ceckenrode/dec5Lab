$(document).ready(function() {


  $(".btn").on("click", function(){
    var userLocation = $("#location").val().trim();
    var googleApiURL = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiURL += "key=AIzaSyCuJleuoSrg7Q8ZFUBEogGFre0viUTqj4E";
    googleApiURL += "&address=" + userLocation;

    $.ajax({
      type: "GET",
      url: googleApiURL,
      success: function(mapsdata){
        var geoLocation = mapsdata.results[0].geometry.location;
        issLocator(geoLocation);
      }
    });
  });

// OPEN NOTIFY - ISS LOCATION API
function issLocator(location){
  $.ajax({
    url: 'http://api.open-notify.org/iss-pass.json?lat='+location.lat+'&lon='+location.lng,
    type: 'GET',
    success: 
  });
}

});


// Google maps api key:   AIzaSyCuJleuoSrg7Q8ZFUBEogGFre0viUTqj4E

// Key:
// 3b0e27fb11cf8491cc65ec8b7ca879f8

// Secret:
// ffaf2acbb179633a