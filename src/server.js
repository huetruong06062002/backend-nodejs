require("dotenv").config();
const express = require("express"); //comonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const connection = require("./config/database");


const port = process.env.PORT || 8888; //route
const hostname = process.env.HOST_NAME;

// app.Method("router", handle)
const app = express(); //app express

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({extended: true})); // for form data

//config view engine
configViewEngine(app);

//Khai báo route
app.use("/", webRouter);

//test connection


// simple query
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
