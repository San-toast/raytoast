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
module.exports = router;
