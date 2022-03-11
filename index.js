require("dotenv").config();
const pg = require("pg");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const apiKey = process.env.apiKey;

// idk if we will need this token
// const token = process.env.token;
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

const getMovies = async () => {
  const movie = await fetch(
    `http://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    {
      method: "GET",
    }
  );
  let movieJson = await movie.json();
  console.log(movieJson);
};
getMovies();

app.get("/hello", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, console.log(`running on port ${PORT}`));
