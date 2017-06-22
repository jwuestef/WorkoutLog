
//build a user model in sequelize.... traditional for models to begin with a capital letter

module.exports = function(sequelize, DataTypes){

	var User = sequelize.define("user", {
		username: DataTypes.STRING,
		passwordhash: DataTypes.STRING,
	});

	return User;

};
