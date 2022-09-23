

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,

    
  },
  Genre: {
    type: String,
    required: true
  },
}, { timestamps: true });



const Books = mongoose.model('Books', booksSchema);

module.exports = {Books};