require("dotenv").config();
const apiKey = process.env.apiKey;
const fetch = require("node-fetch");
const getMovies = async () => {
  let url = `http://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
  const movie = await fetch(url, {
    method: "GET",
  });
  let movieJson = await movie.json();
  console.log(movieJson);
};
getMovies();
