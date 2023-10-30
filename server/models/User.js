const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        fullname: {type: String, required: true},
        username: {type: String, required: true, unique:true},
        email: {type: String, required: true, unique:true},
        role:{type: String, required: true},
        img: {type: String},
        password: {type: String, required:true},
        phone: {type: String, required: false},
        address: {type: String},
        gender: {type: String, required: false},
        active: {type: Boolean, default: true},
        isAdmin: {
            type: Boolean,
            default: false
        }
    },
{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);