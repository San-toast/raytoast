const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/:movieid/:showtimeid/concessions", async (req, res) => {
  let movieid = req.params.movieid;
  let showtimeid = req.params.showtimeid;
  res.render("pages/concessions");
  let concessions = await db.Concessions.findAll();
  console.log(concessions[0].dataValues);
});

module.exports = router;
