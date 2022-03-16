const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/redirect", (req, res) => {
  res.redirect("/submit");
});
module.exports = router;
