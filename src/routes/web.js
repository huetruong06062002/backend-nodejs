const express = require("express");
const { homePage, example, postCreateUser, getCreatePage } = require("../controllers/homeController");
const router = express.Router();

//Khai báo route
router.get("/", homePage);

router.get("/abc", (req, res) => {
  res.send("ABC!");
});

router.get("/hoidanit", example);
router.get("/create", getCreatePage);


router.post("/create-user", postCreateUser);

module.exports = router;//export default
