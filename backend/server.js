const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = express.Router();
const PORT = process.env.PORT || 3001;
//const routes = require("routes")

app.use("/Users", UserRoutes);
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("/client/build"));
}

//app.use(routes);

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

