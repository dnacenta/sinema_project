// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// api_key = 9912e617f1d163b534e15c4c8b778da1


var filmPick;

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
      url:"https://api.themoviedb.org/3/discover/movie?api_key=9912e617f1d163b534e15c4c8b778da1&language=en-UK&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte="
          +rdg+
          "&primary_release_date.lte="
          +rdl,
      success: showEvents,
      error: handleError
    });
}

function showEvents(response){
  var imageUrl  = 'https://image.tmdb.org/t/p/w500';
  var films     = response.results;
  console.log(response);

  films.forEach(function(film){
    var filmPick  = film;
    var filmTtile = film.original_title;
    var posterUrl = film.poster_path;
    var poster    = imageUrl + posterUrl;
    var html      = '<li><button value="'
                    + filmTtile +
                    '"class="btn btn-primary film-img-js" type="button"><img src="'
                    + poster +
                    '"></button></li>';

    $('#img').append(html);


    console.log('walking forward!');
  });
  $('.film-img-js').on('click',savePick)
}

function savePick(event){
  event.currentTarget.value
  $.ajax({
    type: "POST",
    url: '/create_choice_url',
    data: {title: event.currentTarget.value},
    error: handleError
  });
  console.log('yeah baby')
}

function handleError(error){
  console.log(error);
}

//----------------------------------//

$(document).on('ready', function(){
  getEvents();
  // $('.film-img-js').on('click', savePick)
  // $('.film-img-js').on('click', function(event){ console.log('ENTRA PUTO');})
})
