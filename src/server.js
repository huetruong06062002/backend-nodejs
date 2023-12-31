require("dotenv").config();
const express = require("express"); //comonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const apiRoutes = require("./routes/api");

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
app.use("/v1/api/", apiRoutes); 



(async() => {
  try{
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
    
  } catch(error){
    console.log("Error connect to db:", error);
  }
})()

