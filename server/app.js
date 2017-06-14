var express = require("express");
var app = express();

app.use(require("./middleware/headers"));  //will pull the headers module, which we've made to allow cross origin requests.

// app.use vs app.get    is .use because we can do both .get and .post requests? 
app.use("/api/test", function(req, res) {
	res.send("Hello World!");
});









app.listen(3000, function() {
	console.log("app is listening on 3000");
});