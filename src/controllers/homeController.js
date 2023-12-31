const connection = require("../config/database");
const User = require("../models/User");
const {
  getAllUsers,
  getUserById,
  updateUserByid,
  deleteUserById,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await User.find({});
  return res.render("home.ejs", { listUsers: results });
};

const example = (req, res) => {
  res.render("example");
};

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;
  console.log(">>> req.body", email, myname, city);
  // INSERT INTO Users  (email, name, city)
  // VALUES ("test", "eric", "hoidainit");

  // with placeholder
  // connection.query(
  //   `INSERT INTO Users  (email, name, city)
  //   VALUES (?, ?, ?);`,
  //   [email, myname, city],
  //   function(err, results) {
  //     console.log(results);
  //   }
  // );

  // let [result, fileds] = await connection.query(
  //   `INSERT INTO Users  (email, name, city) VALUES (?, ?, ?);`,
  //   [email, myname, city]
  // );

  await User.create({ email: email, name: myname, city: city });

  res.redirect("/");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId).exec();
  res.render("edit.ejs", { userEdit: user }); //x <- y
};

const postUpdateUser = async (req, res) => {
  let { email, myname, city, userId } = req.body;
  console.log(">>> req.body", email, myname, city, userId);
  await User.updateOne(
    { id: userId },
    { email: email, name: myname, city: city }
  );

  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.userId;
  let user = await User.findById(userId).exec();
  res.render("delete.ejs", { userEdit: user });
};

const postUserRemoveUser = async (req, res) => {
  const userId = req.body.userId;
  // console.log(userId);
  await User.deleteOne({
    id: userId
  })
  res.redirect("/");
};

module.exports = {
  getHomePage,
  example,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postUserRemoveUser,
};
