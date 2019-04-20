const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const UserRoutes = express.Router();
const User = require('User');

app.use('/Users', UserRoutes);
app.use(cors());
app.use(bodyParser.json());


UserRoutes.route('/').get(function(req, res) {
    User.find(function(err, Users) {
        if (err) {
            console.log(err);
        } else {
            res.json(Users);
        }
    });
});

UserRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

mongoose.connect('mongodb://127.0.0.1:27017/Users', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});