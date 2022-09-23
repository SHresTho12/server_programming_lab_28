

const mongoose = require('mongoose');


const bookList = new mongoose.Schema({
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





module.exports = mongoose.model('bookList', bookList);