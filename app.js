
var bodyParser = require('body-parser');
require('dotenv').config();
var express = require('express');  
var app = express();
var router = require('./router.js');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


db_url = process.env.DB_URL


mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("hello from db"))
  .catch(err => console.log(err));







app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Listening on port ' + port);
    }
);








app.use(router);
