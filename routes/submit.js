const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/:movieid/:showtimeid/submit", async (req, res) => {
  let movieid = req.params.movieid;
  let showtimeid = req.params.showtimeid;
  res.render("pages/submit");
});

module.exports = router;
