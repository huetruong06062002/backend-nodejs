const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fileds] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUserById = async (userId) => {
  let [results, fileds] = await connection.query(
    "SELECT * FROM Users WHERE id= ?",
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserByid = async (email, myname, city, userId) => {
  let [result, fileds] = await connection.query(
    `UPDATE Users 
        SET email = ?, name= ?, city= ? WHERE id = ?`,
    [email, myname, city, userId]
  );



};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserByid,
};
