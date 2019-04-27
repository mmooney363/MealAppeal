const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    user_name: {
        type: String
    },
    user_password: {
        type: String
    },
    faved_restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }]
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;

