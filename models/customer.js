const mongoose = require("mongoose")

// making mongoose schema
const customerSchema = new mongoose.Schema({
    customerId: {
        type:String, 
        required: true,
        unique: true
    },
    email: {
        type:String, 
        required: true,
        unique: true
    },
})
//settip up mongoose model
const Customer = mongoose.model("Customer",customerSchema)
// exporting the model
module.exports = Customer