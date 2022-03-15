const express = require("express");
const router = express.Router();
const db = require("../models");
const getNowPlaying = require("../scripts/movies");
router.use(express.json());

router.get("/showtimes/:id", async (req, res) => {
  let id = req.params.id;
  let nowPlaying = await getNowPlaying();
  let currentMovie = "";
  for (movie of nowPlaying) {
    if (movie.movieId === id) {
      currentMovie = movie;
    }
  }
  let showtimes = await db.Showtimes.findAll({
    where: {
      movieid: id,
    },
  });
  res.render("pages/showtimes", {
    nowPlaying: nowPlaying,
    movie: currentMovie,
    showtimes: showtimes,
  });
});

module.exports = router;
