require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("./middlewares/auth");

const app = express();

const initializePassport = require("./passport-config");
initializePassport(
  passport,
  async (email) => {
    const userFound = await User.findOne({ email });
    return userFound;
  },
  async (id) => {
    const userFound = await User.findOne({ _id: id });
    return userFound;
  }
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(express.static("public"));


app.get("/", checkAuthenticated, (req, res) => {
  res.render("index", { firstName: req.user.firstName, lastName: req.body.lastName });
});

app.get("/Register", checkNotAuthenticated, (req, res) => {
  res.render("Register");
});

app.get("/Login", checkNotAuthenticated, (req, res) => {
  res.render("Login");
});

app.get("/Contact_R", checkNotAuthenticated, (req, res) => {
  res.render("Contact_R");
});

app.get("/Contact_L", checkAuthenticated, (req, res) => {
  res.render("Contact_L");
});

app.get("/Quiz", checkAuthenticated, (req, res) => {
  res.render("Quiz");
});

app.get("/Single_Quiz", checkAuthenticated, (req, res) => {
  res.render("Single_Quiz");
});

app.get("/Couple_Quiz", checkAuthenticated, (req, res) => {
  res.render("Couple_Quiz");
});

app.get("/Result", checkAuthenticated, (req, res) => {
  res.render("Result");
});

app.post("/Login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/Login",
    failureFlash: true,
  })
);

app.post("/Register", checkNotAuthenticated, async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email });

  if (userFound) {
    req.flash("error", "User with that email already exists");
    res.redirect("/Register");
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
      });

      await user.save();
      res.redirect("/Login");
    } catch (error) {
      console.log(error);
      res.redirect("/Register");
    }
  }
});

app.delete("/Logout", (req, res) => {
  req.logOut();
  res.redirect("/Login");
});


mongoose
  .connect("mongodb://127.0.0.1:27017/Love-project", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on Port 3000");
    });
  });
