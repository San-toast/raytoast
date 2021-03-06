require("dotenv").config();
const pg = require("pg");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

//ejs
const ejs = require("ejs");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("./public"));

//route variables
const tickets = require("./routes/tickets");
const home = require("./routes/home");
const reserve = require("./routes/reserve");
const showtimes = require("./routes/showtimes");
const concessions = require("./routes/concessions");
const contact = require("./routes/contact");
const submit = require("./routes/submit");
const redirect = require("./routes/redirect");

//ElephantSQL
const conString = process.env.conString;
const client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    client.end();
  });
});

//routes
app.use("/", home);
app.use("/theatre", tickets);
app.use("/", reserve);
app.use("/", showtimes);
app.use("/", concessions);
app.use("/", contact);
app.use("/", redirect);
app.use("/", submit);

app.listen(PORT, console.log(`running on port ${PORT}`));
