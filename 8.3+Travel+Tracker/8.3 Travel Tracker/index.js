import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;

// Getting hold of the data base 
const db = new pg.Client( {
  user: "postgres",
  host: "localhost", 
  database: "world", 
  password: "post", 
  port: 5432,
});
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  // Getting hold of the data base 
  const db_countries = await db.query('SELECT country_code FROM visited_countries') // wait is used to tell the program not to execute until this line is executed 
  // List to hold the countries
  var hold_countires = [];
  db_countries.rows.forEach(element => {
    hold_countires.push(element.country_code);
  });
  console.log(db_countries);
  console.log(hold_countires);
  res.render("index.ejs", {countries : hold_countires, total : hold_countires.length})
  db.end()
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
