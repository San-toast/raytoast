const express = require("express");
const router = express.Router();
const db = require("../models");
const getNowPlaying = require("../scripts/movies");

router.get("/", async (req, res) => {
  let nowPlaying = await getNowPlaying();
  res.render("pages/home", { nowPlaying: nowPlaying });
});
module.exports = router;
