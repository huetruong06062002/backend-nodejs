const express = require("express");
const { homePage, example } = require('../controllers/homeController');
const router = express.Router();


//Khai báo route
router.get("/", homePage);

router.get("/abc", (req, res) => {
  res.send("ABC!");
});

router.get("/hoidanit",example);

module.exports = router;