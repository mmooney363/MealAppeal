const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    faved_restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }]
    
});

const User = mongoose.model('users', userSchema);

module.exports = User;

