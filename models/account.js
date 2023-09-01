const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    
    accountnumber: {
        type: String,
        required: true,
    },
    accountname: {
        type: String,
        reqired: true,
    },
    accounttype: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    deposit: {
        type: Number,
        required: true,
    },

}, { timestamps: true });

module.exports = mongoose.model('accounts', usersSchema);