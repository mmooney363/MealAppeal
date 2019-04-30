const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const UserRoutes = express.Router();
const User = require('./models/user');
const Restaurant = require('./models/restaurant')


app.use('/Users', UserRoutes);
app.use(cors());
app.use(bodyParser.json());


//Routes
UserRoutes.route('/')
.get(function(req, res) {
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


UserRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({user: 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

UserRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else
            user.user_name = req.body.user_name;
            user.user_password = req.body.user_password;
            

            user.save().then(user => {
                res.json('User updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

UserRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

