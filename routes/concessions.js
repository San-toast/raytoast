const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/:movieid/:showtimeid/concessions", async (req, res) => {
  let movieid = req.params.movieid;
  let showtimeid = req.params.showtimeid;
  let concessions = await db.Concessions.findAll();
  res.render("pages/concessions", {
    concessions: concessions,
  });
  console.log(concessions[0].dataValues);
});

module.exports = router;
