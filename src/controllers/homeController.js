const connection = require("../config/database");
const {getAllUsers} = require("../services/CRUDService")

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  console.log(">>>>check results:", results);
  return res.render("home.ejs", {listUsers : results});
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

  let [result, fileds] = await connection.query(`INSERT INTO Users  (email, name, city) VALUES (?, ?, ?);`, [email, myname, city]);

  console.log(result, fileds);
  res.send("Create a user succeed!");
};

const getCreatePage = (req, res) => {
  res.render("create");
};

module.exports = { getHomePage, example, postCreateUser, getCreatePage };
