const express = require("express"); 
const app = express(); 
const port = 3000;
const router = require("./router");
const bodyParser = require('body-parser')
app.use(express.static("public"));
app.use(router); 
app.set("view engine", "ejs"); 

app.set("views", __dirname + "/views"); 
app.listen(port, function () {
 
 
});
