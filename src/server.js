require("dotenv").config();
const express = require("express"); //comonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
// get the client
const mysql = require("mysql2");

const port = process.env.PORT || 8888; //route
const hostname = process.env.HOST_NAME;

const app = express(); //app express
//config view engine

// app.Method("router", handle)
configViewEngine(app);

//Khai báo route
app.use("/", webRouter);

//test connection
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306, //default 3306
  user: "root", //default: empty
  password: "123456",
  database: "hoidanit_nodejs",
});

// simple query
connection.query("select * from Users u ", function (err, results, fields) {
  console.log(">>>results= ", results); // results contains rows returned by server
  console.log(">>>fields= ", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
