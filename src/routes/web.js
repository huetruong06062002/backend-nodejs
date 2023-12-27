const express = require("express");
const { getHomePage, example, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser} = require("../controllers/homeController");
const router = express.Router();

//Khai báo route
router.get("/", getHomePage);

router.get("/abc", (req, res) => {
  res.send("ABC!");
});

router.get("/hoidanit", example);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);



router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);


module.exports = router;//export default
