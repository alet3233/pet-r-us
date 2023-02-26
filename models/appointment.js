const mongoose = require("mongoose")

// making mongoose schema
const appointmentSchema = new mongoose.Schema({
    username: {
        type:String, 
        required: true,
        unique: true
    },
    firstName: {
        type:String, 
        required: true,
    },
    lastName: {
        type:String, 
        required: true,
    },
    email: {
        type:String, 
        required: true,
        unique: true
    },
    service: {
        type:String, 
        required: true,
    },
})
//settip up mongoose model
const Appointment = mongoose.model("Appointment",appointmentSchema)
// exporting the model
module.exports = Appointment