const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let restuarantSchema = new Schema({
    restaurant_name: {
        type: String
    },
   
});

const restaurant = mongoose.model('restaurant', restuarantSchema);

module.exports = restaurant;
