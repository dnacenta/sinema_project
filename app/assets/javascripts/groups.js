// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// api_key = 9912e617f1d163b534e15c4c8b778da1
var filmpick;

function getEvents(){
  var date         = new Date();
  var firstMonth   = date.getUTCMonth() + 1;
  var firstYear    = date.getUTCFullYear();
  var day          = date.getUTCDate();

  if (firstMonth === 12) {
    var lastMonth = 1;
    var lastYear  = date.getUTCFullYear()+1;
  }
  else {
    var lastMonth = date.getUTCMonth() + 2;
    var lastYear  = date.getUTCFullYear();
  }

  var rdg = firstYear + "-" + (firstMonth-1) + "-" + day;
  var rdl = lastYear + "-" + (lastMonth) + "-" + day;

  $.ajax({
      type: "GET",
      url:"https://api.themoviedb.org/3/discover/movie?api_key=9912e617f1d163b534e15c4c8b778da1&language=en-UK&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte="+rdg+"&primary_release_date.lte="+rdl,
      success: showEvents,
      error: handleError
    });
}

function showEvents(response){
  var imageUrl  = 'https://image.tmdb.org/t/p/w500';
  var films     = response.results
  console.log(response);

  films.forEach(function(film){
    var filmpick = film
    var posterUrl = film.poster_path
    var poster    = imageUrl + posterUrl;
    var html = '<li><button class="btn btn-primary" type="button" onclick="savePick()"><img src="' + poster + '"></button></li>';

    $('#img').append(html);
    console.log('walking forward!');
  });
}

// function savePick(){
//   $.ajax({
//       type: "GET",
//       url:"/choices",
//       success:,
//       error:handleError
//     });
// }

function handleError(error){
  console.log(error);
}

//----------------------------------//

$(document).on('ready', function(){
  getEvents();
})
