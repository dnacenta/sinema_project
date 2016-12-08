// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// api_key = 9912e617f1d163b534e15c4c8b778da1
function getEvents(){
  $.ajax({
      type: "GET",
      url:"https://api.themoviedb.org/3/movie/76341?api_key=9912e617f1d163b534e15c4c8b778da1",
      success: showEvents,
      error: handleError
    });
}

function showEvents(response) {
  var imageUrl  = 'https://image.tmdb.org/t/p/w500';
  var posterUrl = response.poster_path;
  var poster    = imageUrl + posterUrl;

  $('#img').html('<img src="'+poster+'">');

  console.log(response);
}

function handleError(error){
  console.log(error);
}
