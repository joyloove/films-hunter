/// when enter is hit it starts the search
function checkSubmit(e) {
  if (e && e.keyCode == 13) {
    var searching = document.getElementById('search').value;
    search(searching);
    document.getElementById('search').value = "";
    return false;
  }
}

function search(search) {
  $(".movies").remove();
  //http://api.themoviedb.org/3/search/multi?api_key=84ade81a32ab2ef4395fd367ad4ea5be&query=
  // var searchurl = "https://api.themoviedb.org/3/search/multi?api_key=84ade81a32ab2ef4395fd367ad4ea5be&query=";
  $.getJSON(searchurl + search, function(data) {
    for (var i = 0; i < data.results.length; i++) {
      var id = data.results[i].id;
      var title = data.results[i].name;
      var rating = data.results[i].vote_average;
      var poster = posterPaths + data.results[i].poster_path;
      var overview = data.results[i].overview;
      if (poster === "http://image.tmdb.org/t/p/w500null") {
          //if their is no poster dont show the movie
      }
      else if(overview == "null"){
        //dont show if the overview is null
      }
      else{
      // $(".main").append("<div class='col-sm-2 text-center movies m" + i + "' id='" + id + "'><div class='tiles'><img onclick='movieInfo(" + id + ")' src=" + poster + "><div class='ratings'><p class='lead rating'>" + ratin + " <i class='fa fa-star' aria-hidden='true'></i></p></div></div></div>");
      }
    }
  });
}
