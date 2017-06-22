var router = require("express").Router();
var sequelize = require("../db.js");
var User = sequelize.import("../models/user");


//create an api endpoint to handle creating a user that is signing up for the first time
router.post("/", function(req, res){
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



module.exports = router;

