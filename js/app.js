var next = 1;
var nextTV = 1;

var posterPaths = "http://image.tmdb.org/t/p/w500";
var backgroundPaths = "http://image.tmdb.org/t/p/w1000";
var url = "https://api.themoviedb.org/3/discover/movie?";
var key = "&api_key=84ade81a32ab2ef4395fd367ad4ea5be";
var urlTV = "https://api.themoviedb.org/3/discover/tv?";
var moreTVinfo = "https://api.themoviedb.org/3/tv/  +tvshow id+  ?&api_key=84ade81a32ab2ef4395fd367ad4ea5be";
var movieCast = "https://api.themoviedb.org/3/movie/";
var actorInfo = "https://api.themoviedb.org/3/discover/movie?&with_cast=";
var imdbLink = "http://www.imdb.com/title/";
var date = new Date();

function sortMovies(choice) {
  next=0;
  $(".movies").remove();
  if (choice === "rating") {
    choices="vote_count.gte=50&sort_by=vote_average.desc";
    showMovie("vote_count.gte=50&sort_by=vote_average.desc");
  } else if (choice === "grossing") {
    choices="sort_by=revenue.desc";
    showMovie("sort_by=revenue.desc");
  }
  // Genres sort by list start
  else if (choice === "action") {
    choices="&with_genres=28";
    showMovie("&with_genres=28");
  } else if (choice === "adventure") {
    choices="&with_genres=12";
    showMovie("&with_genres=12");
  } else if (choice === "animation") {
    choices="&with_genres=16";
    showMovie("&with_genres=16");
  } else if (choice === "comedy") {
    choices="&with_genres=35";
    showMovie("&with_genres=35");
  } else if (choice === "crime") {
    choices="&with_genres=80";
    showMovie("&with_genres=80");
  } else if (choice === "documentary") {
    choices="&with_genres=99";
    showMovie("&with_genres=99");
  } else if (choice === "drama") {
    choices="&with_genres=18";
    showMovie("&with_genres=18");
  } else if (choice === "family") {
    choices="&with_genres=10751";
    showMovie("&with_genres=10751");
  } else if (choice === "fantasy") {
    choices="&with_genres=14";
    showMovie("&with_genres=14");
  } else if (choice === "foreign") {
    choices="&with_genres=10769";
    showMovie("&with_genres=10769");
  } else if (choice === "history") {
    choices="&with_genres=36";
    showMovie("&with_genres=36");
  } else if (choice === "horror") {
    choices="&with_genres=27";
    showMovie("&with_genres=27");
  } else if (choice === "music") {
    choices="&with_genres=10402";
    showMovie("&with_genres=10402");
  } else if (choice === "mystery") {
    choices="&with_genres=9648";
    showMovie("&with_genres=9648");
  } else if (choice === "romance") {
    choices="&with_genres=10749";
    showMovie("&with_genres=10749");
  } else if (choice === "science fiction") {
    choices="&with_genres=878";
    showMovie("&with_genres=878");
  } else if (choice === "tv movie") {
    choices="&with_genres=10770";
    showMovie("&with_genres=10770");
  } else if (choice === "thriller") {
    choices="&with_genres=53";
    showMovie("&with_genres=53");
  } else if (choice === "war") {
    choices="&with_genres=10752";
    showMovie("&with_genres=10752");
  } else if (choice === "western") {
    choices="&with_genres=37";
    showMovie("&with_genres=37");
  }
  //genre ends
  else {
    choices="sort_by=popularity.desc";
    showMovie("sort_by=popularity.desc");
  }
}
