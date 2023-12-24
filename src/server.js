const express = require("express"); //comonjs
const path = require("path");
require('dotenv').config();

const port = process.env.PORT; //route
const hostname = process.env.HOST_NAME;



const app = express(); //app express
//Khai báo engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Khai báo route
app.get("/", (req, res) => {
  res.render("example");
});

app.get("/abc", (req, res) => {
  res.send("ABC!");
});

app.get("/hoidanit", (req, res) => {
  res.send("hoidanit!");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
