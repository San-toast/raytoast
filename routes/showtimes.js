const express = require("express");
const router = express.Router();
const db = require("../models");
const getNowPlaying = require("../scripts/movies");

router.get("/showtimes/:id", async (req, res) => {
  let id = req.params.id;
  let nowPlaying = await getNowPlaying();
  let currentMovie = "";
  for (movie of nowPlaying) {
    if (movie.movieId === id) {
      currentMovie = movie;
    }
  }
  res.render("pages/showtimes", {
    nowPlaying: nowPlaying,
    movie: currentMovie,
  });
});

module.exports = router;
