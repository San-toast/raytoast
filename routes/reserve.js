const express = require("express");
const router = express.Router();
const db = require("../models");
const getNowPlaying = require("../scripts/movies");

router.get("/reserve", async (req, res) => {
  let nowPlaying = await getNowPlaying();
  res.render("pages/reserve", { nowPlaying: nowPlaying });
});

module.exports = router;
