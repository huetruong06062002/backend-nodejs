const User = require("../models/User");
const { uploadSingleFile, uploadMultipleFiles } = require('../services/FileService');


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

const putUpdateUserAPI = async (req, res) => {
  let { email, myname, city, userId } = req.body;

  console.log(">>> req.body", email, myname, city, userId);
  let user = await User.updateOne(
    { _id: userId },
    { email: email, name: myname, city: city }
  );

  return res.status(200).json({
    EC: 0,
    data: user,
  });
};

const deleteAUserAPI = async (req, res) => {
  const userId = req.body.userId;
  // console.log(userId);
  let result = await User.deleteOne({
    id: userId,
  });
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const postUploadSingleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  let result = await uploadSingleFile(req.files.image);

  console.log(">>> check result", result);
  return res.send("file post");
}


const postUploadMultipleFilesApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }
  console.log(req.files);

  //upload single => file is an object
  //upload multiple => file is an array

  if(Array.isArray(req.files.image)) {
    //upload multiple 
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result
    })

  }else{
    //upload single
    return await postUploadSingleFileApi(req, res);
  }

}

module.exports = {
  getUsersApi,
  postCreateUserApi,
  putUpdateUserAPI,
  deleteAUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesApi
};
