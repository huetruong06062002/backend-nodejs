const path = require("path");
const express = require("express");

//Khai báo engine

const configViewEngine = (app) => {
    app.set("views", path.join("./src", "views"));
    app.set("view engine", "ejs");
    //Khai bao static file
    app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
