const User = require("../models/User");

const getUsersApi = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    EC: 0,
    data: results,
  });
};

const postCreateUserApi = async (req, res) => {
  let { email, myname, city } = req.body;
  console.log(">>> req.body", email, myname, city);
  let user = await User.create({ email: email, name: myname, city: city });
  console.log(user);
  return res.status(200).json({
    EC: 0,
    data: user,
  });
};

module.exports = {
  getUsersApi,
  postCreateUserApi,
};
