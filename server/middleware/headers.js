module.exports = function(req, res, next){
	res.header("access-control-allow-origin", "*");   //lets other servers access this one. By default, servers don't allow other servers to access them, - called cross-origin requests (requests from another domain)...
	next();											//the * say's we'll accept requess from ANY origin
}


