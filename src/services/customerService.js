const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllCustomersService = async () => {
    try {
        let result = await Customer.find({});
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const putUpdateCustomerService = async ( id, name, email, address) => {
    try {
        let result = await Customer.updateOne({_id: id}, {name: name, email: email, address: address});
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


const deleteCustomerService = async (id) => {
    try {
        let result = await Customer.deleteById(id);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteArrCustomerService = async(arrId) => {
    try {
        let result = await Customer.delete({_id: { $in: arrId}});
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomerService,
  deleteCustomerService,
  deleteArrCustomerService
};
