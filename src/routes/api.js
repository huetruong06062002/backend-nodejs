const express = require("express");

const routerAPI = express.Router();

const {getUsersApi, postCreateUserApi, putUpdateUserAPI, deleteAUserAPI} = require("../controllers/apiController");


routerAPI.get("/", (req, res) => {
    res.send("Hello world with eric");
});


routerAPI.get("/users", getUsersApi);

routerAPI.post("/users", postCreateUserApi);

routerAPI.put("/users", putUpdateUserAPI);

routerAPI.delete("/users", deleteAUserAPI);



module.exports = routerAPI;//export default
