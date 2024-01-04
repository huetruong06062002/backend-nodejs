// {key : value}

const { uploadSingleFile } = require("../services/FileService");
const { createCustomerService } = require("../services/customerService");

module.exports = {
  postCreateCustomer: async (req, res) => {
    //req.body only get text , can't get file
    let { name, address, phone, email, description } = req.body;
    let imageUrl = "";
    console.log(">>> req.body", name, address, phone, email, description);

    if (!req.files || Object.keys(req.files).length === 0) {
      //do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
      console.log("check result:", result);
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      imageUrl,
    };
    let customer = await createCustomerService(customerData);
    console.log(customer);
    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
};
