// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// api_key = 9912e617f1d163b534e15c4c8b778da1


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
    var filmTtile = film.original_title;
    var posterUrl = film.poster_path;
    var poster    = imageUrl + posterUrl;
    var html      = '<li><img value="'
                    + filmTtile +
                    '" class="film-img-js" src="'
                    + poster +
                    '"></li>';

    $('.film-container').append(html);
  });

  $('.film-img-js').on('click',saveChoice)
}

function saveChoice(event){
  event.currentTarget.getAttribute('value')

  var userId    = $('.film-container')[0].dataset.user
  var groupId   = $('.film-container')[0].dataset.group
  var posterUrl = event.currentTarget.getAttribute('src')

  console.log(posterUrl);

  $.ajax({
    type: "POST",
    url: '/users/'+ userId +'/groups/'+ groupId +'/choices/create',
    data: {title: event.currentTarget.getAttribute('value'),
           poster_url: posterUrl,
           user_id: userId,
           group_id: groupId,
          },
    success: postSuccess,
    error: postError
  });
}

function postSuccess(){
  console.log('success');
}

function postError(error){
  console.log(error.responseText);
}

function handleError(error){
  console.log(error);
}

//----------------------------------//

$(document).on('ready', function(){
  getEvents();
})
