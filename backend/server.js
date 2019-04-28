const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = express.Router();
const models = require("./models");
const PORT = process.env.PORT || 3001;

app.use("/Users", UserRoutes);
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('./client/source/app.js'));
}

// DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(process.env.PORT || PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

//Routes
UserRoutes.route("/").get(function(req, res) {
  models.User.find(function(err, Users) {
    if (err) {
      console.log(err);
    } else {
      res.json(Users);
    }
  });
});

UserRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  models.User.findById(id, function(err, user) {
    res.json(user);
  });
});

UserRoutes.route("/add").post(function(req, res) {
  let user = new models.User(req.body);
  user
    .save()
    .then(user => {
      res.status(200).json({ user: "user added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new user failed");
    });
});

UserRoutes.route("/update/:id").post(function(req, res) {
  models.User.findById(req.params.id, function(err, user) {
    if (!user) res.status(404).send("data is not found");
    else user.user_name = req.body.user_name;
    user.user_password = req.body.user_password;

    user
      .save()
      .then(user => {
        res.json("User updated!");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});
