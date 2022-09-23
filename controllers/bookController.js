const mongoose = require('mongoose');
var bookList = new mongoose.model("bookList",bookList );
const getBookList = (req, res) => {

    



    //fetch the bookList from the database
    bookList.find({}, (err, bookList) => {
        if (err) {
            res.status(500).send("There was a server error in fetching Book List");
            res.end();
        } else {

            res.render('booklistpage', { bookList: bookList });
        }
    })


    
}
module.exports = {getBookList: getBookList};