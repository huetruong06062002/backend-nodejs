const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let uploadPath = "./src/public/img/" + fileObject.name;

  // Use the mv() method to place the file somewhere on your server

  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      path: "link-image",
      error: null,
    };
  } catch (error) {
    console.log("check error:", err);
    return {
      status: "failed",
      path: "null",
      error: JSON.stringify(err),
    };
  }
};

const uploadMultipleFiles = () => {};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};