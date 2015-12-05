$(document).on('ready', function(e) {
  e.preventDefault();
   $.ajax({
      type: "GET",
      url: flickrApiUrl + $.param(flickrApiParams),
      success: flickrSuccessHandler
    });
});