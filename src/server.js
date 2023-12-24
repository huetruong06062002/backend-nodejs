require("dotenv").config();
const express = require("express"); //comonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const { homePage , example} = require("./controllers/homeController");

const port = process.env.PORT || 8888; //route
const hostname = process.env.HOST_NAME;

const app = express(); //app express
//config view engine

// app.Method("router", handle)
configViewEngine(app);

app.use("/", webRouter);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
