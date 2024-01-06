// {key : value}

const { uploadSingleFile } = require("../services/FileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomerService,
  deleteCustomerService,
  deleteArrCustomerService,
} = require("../services/customerService");



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
      image: imageUrl,
    };
    let customer = await createCustomerService(customerData);
    console.log(customer);
    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  postCreateArrCustomer: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: customers,
      });
    }
  },
  getAllCustomers: async (req, res) => {
    let { limit, page, name } = req.query;
    let customers = null;
    if (limit && page) {
      customers = await getAllCustomersService(limit, page, name, req.query);
    } else {
      customers = await getAllCustomersService();
    }
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: null,
      });
    }
  },
  putUpdateCustomers: async (req, res) => {
    const { id, name, email, address } = req.body;
    console.log("check", id, name, email, address);
    let result = await putUpdateCustomerService(id, name, email, address);
    if (result) {
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: null,
      });
    }
  },
  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteCustomerService(id);
    if (result) {
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    }
  },
  deleteArrCustomer: async (req, res) => {
    let { customersId } = req.body;
    let result = await deleteArrCustomerService(customersId);
    if (result) {
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    }
  },
};
