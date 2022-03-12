require("dotenv").config();
const pg = require("pg");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const apiKey = process.env.apiKey;

// idk if we will need this token
// const token = process.env.token;
app.use(express.json());
const tickets = require("./routes/tickets");
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

app.use("/tickets", tickets);
app.listen(PORT, console.log(`running on port ${PORT}`));
