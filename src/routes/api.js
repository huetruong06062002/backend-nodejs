const express = require("express");

const routerAPI = express.Router();

const {getUsersApi, postCreateUserApi, putUpdateUserAPI, deleteAUserAPI, postUploadSingleFileApi, postUploadMultipleFilesApi} = require("../controllers/apiController");


routerAPI.get("/", (req, res) => {
    res.send("Hello world with eric");
});


routerAPI.get("/users", getUsersApi);

routerAPI.post("/users", postCreateUserApi);

routerAPI.put("/users", putUpdateUserAPI);

routerAPI.delete("/users", deleteAUserAPI);

routerAPI.post("/file", postUploadSingleFileApi);

routerAPI.post("/files", postUploadMultipleFilesApi);



module.exports = routerAPI;//export default
