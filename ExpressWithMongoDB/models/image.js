//mongoose model for uploading images to database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema = new Schema({
  title: String,
  description: String,
  filename: String,
  path: String,
});
const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
