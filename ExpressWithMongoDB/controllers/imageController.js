//controler for uploading images to database
const imageModel = require("./../models/image");
const multer = require("multer");
const path = require("path");
const getImage = async (req, res) => {
  res.render("slide");
};

const getUpload = async (req, res) => {
  res.render("uploadImage");
};

const postImage = (req, res) => {
  const data = new imageModel({
    title: req.body.title,
    description: req.body.description,
    filename: req.file.filename,
    path: req.file.path,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/images");
    });
};

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: "../public/images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});
module.exports = { getImage, postImage, getUpload, imageUpload };
