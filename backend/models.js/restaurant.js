const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let restuarantSchema = new Schema({
    restaurant_name: {
        type: String
    },
   
});

const Restaurant = mongoose.model('Restaurant', restuarantSchema);

module.exports = Restaurant;
