// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
//api-key: 9912e617f1d163b534e15c4c8b778da1
function getEvents(){
  $.ajax({
      type: "GET",
      url:"https://api.themoviedb.org/3/movie/76341?api_key=9912e617f1d163b534e15c4c8b778da1",
      success: showEvents,
      error: handleError
    });
}

function showEvents(response) {
  console.log('Right path!')
}

function handleError(error){
  console.log('Higueputaa Malpario');
  console.log(error);
}

$(document).on('ready', function(){
  getEvents();
})
