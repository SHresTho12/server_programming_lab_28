//home route with express routers
var express = require('express');
var app = express();
var router = express.Router();
const mongoose = require('mongoose');
const bookslist = require('./models/book');
var homeController = require('./controllers/homeController.js');
var booklist = require('./controllers/bookController.js');
var book_submit = require('./controllers/bookSubmit.js')


var bookList = new mongoose.model("bookList",bookList );

router.get('/', homeController.gethome);

router.get("/submit", book_submit.getForm);



  router.post("/submit", async (req, res) => {
   
    const  title= req.body.title.trim();
    const author = req.body.author.trim();
    const genre = req.body.genre.trim();
    const createNewBook = new bookList({
      title:title,
      Author: author,
      Genre:genre
    });
    
    await createNewBook.save((err) => {
      //save is the instance method
      if (err) {
        res.status(500).send("There was a server error in saving Book List");
        res.end();
      } else {
        res.redirect("/submit");
      }
    })
  });

//   router.get("/booklist", booklist.getBookList);
//   app.get("/", async (req, res) => {
//     const bookList = await BookList.find({}).sort("-date");
//     res.render("index", { bookList });
//   });

module.exports = router;