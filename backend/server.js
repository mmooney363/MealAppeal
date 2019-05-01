// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const UserRoutes = express.Router();
// const PORT = process.env.PORT || 3001;
// const path = require('path');
// const passport = require("passport");
// const users = require("./routes/api/users");
// //const routes = require("routes")



// app.use(cors());

// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());

// if (process.env.NODE.ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// });

// // DB Config
// const db = require("./config/keys").mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// // Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);
// // Routes
// app.use("/api/users", users);

// app.listen(process.env.PORT || PORT, function () {
//   console.log("Server is running on Port: " + PORT);
// });

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  const root = require('path').join(__dirname, 'client', 'build')
  app.use(express.static(root));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});