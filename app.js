const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/" , function(request,response){
var firstName = request.body.fName;
var lastName = request.body.lName;
var email = request.body.email;
console.log(firstName, lastName, email);

});
app.listen(process.env.PORT || 3000, function(){
  console.log("Server started at port 3000!");
});


// Api bb414369bffc02c266aa60cfa329e34a-us18
// list id fa24fb09cc
