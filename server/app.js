var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sequelize = require("./db.js");
var User = sequelize.import("./models/user");


app.use(require("./middleware/headers"));  //will pull the headers module, which we've made to allow cross origin requests to this server.




app.use("/api/test", function(req, res) {
	res.send("Hello World!");
});



app.listen(3000, function() {
	console.log("app is listening on 3000");
});





User.sync();   //call the sequelize method on the User object... this line of code creates a table in postgres and matches the model we defined. (doesn't drop the DB)
// User.sync({force:true})  //this will drop the table completely, should we ever need to do so. Must comment out User.sync() at the same time

app.use(bodyParser.json());  //tell the application to use bodyParser. Will take data off incoming requests and turn it into JSON. It will take that JSON and expose it to be used for req.body


//create an api endpoint to handle creating a user that is signing up for the first time
app.post("/api/user", function(req, res){
	var username = req.body.user.username;
	var pass = req.body.user.password;

	//Need to create a user object and user sequelize to put that user into our database.
	User.create({
		username: username,
		passwordhash: ""
		//This code takes the incoming post request data and creates a User object.  That object is then persisted to the postgres database through the .create method.
		//This method should also have a promise attached to it.  We will use that promise to return information regarding the User object created.
		//We will create a .then that will contain createSuccess and createError functions.
	}).then(
		//Sequelize is going to return the object it just created from the database
		function createSuccess(user){
			res.json({
				user: user,
				message: "create"
			});
		},
		function createError(err){
			res.send(500, err.message);
		}
	)
});














