const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    User_name: {
        type: String
    },
    User_password: {
        type: String
    },
    
});

module.exports = mongoose.model('User', User);