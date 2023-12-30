const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserByid,
  deleteUserById,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  console.log(">>>>check results:", results);
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

  let [result, fileds] = await connection.query(
    `INSERT INTO Users  (email, name, city) VALUES (?, ?, ?);`,
    [email, myname, city]
  );

  console.log(result, fileds);
  // res.send("Create a user succeed!");
  res.redirect("/");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user }); //x <- y
};

const postUpdateUser = async (req, res) => {
  let { email, myname, city, userId } = req.body;
  console.log(">>> req.body", email, myname, city, userId);
  await updateUserByid(email, myname, city, userId);
  // console.log(result, fileds);
  // res.send("Updated a user succeed!");
  res.redirect("/");
};

const postDeleteUser = async(req, res) => { 
  const userId = req.params.userId;
  let user = await getUserById(userId);
  res.render("delete.ejs",  { userEdit: user });
}

const postUserRemoveUser = async(req, res) => {
  const userId = req.body.userId;
  // console.log(userId);
  await deleteUserById(userId);
  res.redirect("/");
}

module.exports = {
  getHomePage,
  example,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postUserRemoveUser
};
