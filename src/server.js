require("dotenv").config();
const express = require("express"); //comonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const apiRoutes = require("./routes/api");
const fileUpload = require("express-fileupload");

const connection = require("./config/database");
const { MongoClient } = require("mongodb");

const port = process.env.PORT || 8888; //route
const hostname = process.env.HOST_NAME;

// app.Method("router", handle)
const app = express(); //app express

//config file upload
app.use(fileUpload());

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); // for form data

//config view engine
configViewEngine(app);

//Khai báo route
app.use("/", webRouter);
app.use("/v1/api/", apiRoutes);

(async () => {
  try {
    //using mongoose
    //await connection();

    //using mongo driver

    //// Connection URL
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;

    await client.connect();
    console.log('Connected successfully to server');

    
    const db = client.db(dbName);
    const collection = db.collection('documents');

    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to db:", error);
  }
})();
