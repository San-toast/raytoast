require("dotenv").config();
const apiKey = process.env.apiKey;
const fetch = require("node-fetch");
const getNowPlaying = async () => {
  let array = [];
  let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
  const movies = await fetch(url, {
    method: "GET",
  });
  let moviesJson = await movies.json();
  for (i = 0; i < moviesJson.results.length; i++) {
    array[i] = {
      title: moviesJson.results[i].title,
      movieId: moviesJson.results[i].id.toString(),
      backdrop: `https://image.tmdb.org/t/p/w1280${moviesJson.results[i].backdrop_path}`,
      poster: `https://image.tmdb.org/t/p/w780${moviesJson.results[i].poster_path}`,
    };
  }
  return array;
};

module.exports = getNowPlaying;
