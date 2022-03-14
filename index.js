require("dotenv").config();
const pg = require("pg");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

//ejs stuff
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

//ElephantSQL things
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
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

//routes
app.use("/", home);
app.use("/tickets", tickets);
app.use("/", reserve);
app.use("/", showtimes);
app.use("/", concessions);
app.use("/", contact);
app.use("/", submit);

app.listen(PORT, console.log(`running on port ${PORT}`));
