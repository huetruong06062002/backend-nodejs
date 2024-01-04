const express = require("express");

const routerAPI = express.Router();

const {getUsersApi, postCreateUserApi, putUpdateUserAPI, deleteAUserAPI, postUploadSingleFileApi, postUploadMultipleFilesApi} = require("../controllers/apiController");

const { postCreateCustomer, postCreateArrCustomer, getAllCustomers, putUpdateCustomers } = require('../controllers/customerController');


routerAPI.get("/", (req, res) => {
    res.send("Hello world with eric");
});



routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postCreateUserApi);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteAUserAPI);

routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesApi);


routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrCustomer);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers", putUpdateCustomers);





module.exports = routerAPI;//export default
