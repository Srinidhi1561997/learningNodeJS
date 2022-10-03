// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
require("dotenv").config();
const config = require("./config");
const app = express();
const fs = require("fs");

sql.connect(config, (err) => {
  if (err) console.log("err", err);

  // create Request object
  var request = new sql.Request();

  // query to the database and get the records
  request.query("select * from Users", (err, recordset) => {
    if (err) console.log("err request", err);

    // send records as a response
    console.log("console the records", recordset);
  });
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const dataPath = "./data/users.json";

if (!fs.existsSync("data")) {
  fs.mkdir("data", (err) => {
    if (err) {
      return console.error(err);
    }
  });
}

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, JSON.stringify([]));
}

const routes = require("./routes/routes.js")(app, fs);
const server = app.listen(3200, () => {
  console.log("listening on port %s...", server.address().port);
});
