const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/contact", async (req, res) => {
  let movieid = req.params.movieid;
  let showtimeid = req.params.showtimeid;
  res.render("pages/contact");
});
router.post("/create_ticket", async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, showtimeId, concessions, email } = req.body;
  const newTicket = {
    firstName: firstName,
    lastName: lastName,
    showtimeId: showtimeId,
    concessions: concessions,
    email: email,
  };
  const create = await db.Tickets.create(newTicket);

  if (create) {
    res.status(200).send("Ticket was created");
  } else {
    res.status(400).send(create);
  }
});
module.exports = router;
