const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");
const connectEnsureLogin = require("connect-ensure-login");
const passport = require("passport");
const crypto = require("crypto");
const UserDetails = require("./models/userDetails");
const imageController = require("./controllers/imageController");
const upload = require("./midleware/uploadMiddleware");
const path = require("path");
const Resize = require("./Resize");

router.get("/", homeController.getHome);
router.get("/login", homeController.getLogin);
router.get("/register", homeController.getRegister);
router.get("/logout", homeController.logOut);
router.get(
  "/book-list",
  connectEnsureLogin.ensureLoggedIn(),
  bookController.getBookList
);
router.get(
  "/books",
  connectEnsureLogin.ensureLoggedIn(),
  bookController.getBook
);
router.get(
  "/dashboard",
  connectEnsureLogin.ensureLoggedIn(),
  homeController.getDashboard
);
router.post(
  "/books",
  connectEnsureLogin.ensureLoggedIn(),
  bookController.postBook
);
router.get(
  "/uploadImage",
  connectEnsureLogin.ensureLoggedIn(),
  imageController.getUpload
);
router.get(
  "/images",

  imageController.getImage
);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/dashboard",
  }),
  homeController.postLogin
);

//image

router.get("/", async function (req, res) {
  await res.render("index");
});

//use multer to upload a image to external folder
router.post(
  "/uploadImage",
  imageController.imageUpload.single("image"),
  (req, res) => {
    res.send(req.file);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.post("/register", homeController.postRegister);

module.exports = router;
