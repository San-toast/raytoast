const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/get", async (req, res) => {
  let getTickets = await db.Tickets.findAll();
  res.send(getTickets);
});
router.get("/get/:id", async (req, res) => {
  let { id } = req.params;
  let getShowtime = await db.Tickets.findAll({ where: { showtimeId: id } });
  res.send(getShowtime);
});

router.get("/tickets", async (req, res) => {
  let tickets = await db.Tickets.findAll();
  res.render("pages/theatre", {
    tickets: tickets,
  });
});
router.get("/showtimes", async (req, res) => {
  let showtimes = await db.Showtimes.findAll();
  res.render("pages/theatre-showtimes", {
    showtimes: showtimes,
  });
});
router.get("/concessions", async (req, res) => {
  let concessions = await db.Concessions.findAll();
  res.render("pages/theatre-concessions", {
    concessions: concessions,
  });
});
module.exports = router;
