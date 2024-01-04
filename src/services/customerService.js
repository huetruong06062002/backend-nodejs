const Customer = require('../models/customer');

const createCustomerService = async(customerData) => {
    try{
        await Customer.create({           
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.imageUrl,
        });
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    createCustomerService
}