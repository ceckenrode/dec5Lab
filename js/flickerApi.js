$(document).on('ready', function(e) {
  e.preventDefault();

   $.ajax({
      type: "GET",
      url: flickrApiUrl + $.param(flickrApiParams),
      success: flickrSuccessHandler
    });

   function flickerSuccesHandler(response) {
    var locationPhotos = response.photos.photo;
    for (var i = 0; i < locationPhotos.length; i++) {
      var newCol = buildThumbnail(locationPhotos[i]);
        $("#photosRow").append(newCol);
    } 
   }

   function buildThumnail(photoData) {
    var photoUrl = "https://farm" + photoData.farm;
    photoUrl += ".staticflicker.com/" + photoData.server;
    photoUrl += "/" + photoData.id;
    photoUrl += "_" + photoData.secret + ".jpg";

    var colDiv = $("<div>").addClass("col-md-3");
    var thumbnailDiv = $("<div>").addClass("thumbnail");
    var photoImg = $("<img>").attr("src", photoUrl);
    var captionDiv = $("<div>").addClass("caption");
    var picTitle = $("<p>").append(photoData.title);

    colDiv.append(thumbnailDiv
      .append(photoImg)
      .append(captionDiv
      .append(picTitle)
      )
      );
    return colDiv;
   }

});