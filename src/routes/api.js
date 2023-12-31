const express = require("express");

const routerAPI = express.Router();

const {getUsersApi, postCreateUserApi} = require("../controllers/apiController");


routerAPI.get("/", (req, res) => {
    res.send("Hello world with eric");
});


routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postCreateUserApi);

module.exports = routerAPI;//export default
