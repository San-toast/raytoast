const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/submit", async (req, res) => {
  let latest = await db.Tickets.findAll({
    limit: 1,
    order: [["createdAt", "DESC"]],
    include: {
      model: db.Showtimes,
      attributes: ["MovieName", "Time", "Day", "Date"],
    },
  });
  // let movieInfo = latest.findAll({
  //   include: { model: await db.Showtimes },
  // });
  console.log(latest);
  let showtimeid = req.params.showtimeid;
  res.render("pages/submit", {
    latest: latest,
    // movieInfo: movieInfo,
  });
});

module.exports = router;
