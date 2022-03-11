require("dotenv").config();
const pg = require("pg");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

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

app.get("/hello", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, console.log(`running on port ${PORT}`));
