require("dotenv").config();
const apiKey = process.env.apiKey;
const fetch = require("node-fetch");
const getNowPlaying = async () => {
  let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
  const nowPlaying = await fetch(url, {
    method: "GET",
  });
  let nowPlayingJson = await nowPlaying.json();
  //   console.log(movieJson.results);
  let titles = [];
  for (movie of nowPlayingJson.results) {
    titles.push(movie.title);
  }
  console.log(titles);
};
getNowPlaying();
