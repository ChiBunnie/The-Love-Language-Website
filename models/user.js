const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    lovelanguageSingle: {
        s_w: Number,
        s_a: Number,
        s_g: Number,
        s_q: Number,
        s_p: Number,
    },
    lovelanguagecouple: {
        c_w: Number,
        c_a: Number,
        c_g: Number,
        c_q: Number,
        c_p: Number,
    }, 
    Created: {
        type: Date, default: Date.now
    },  
});

const User = mongoose.model('User', userSchema);
module.exports = User;
