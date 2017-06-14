$(document).ready(function(){

	$("#testAPI").on("click", function(){
		console.log("it's working!!");
	});

	var test = $.ajax({
		type: "GET",
		url: "http://localhost:3000/api/test"
	});
	
	test.done(function(data){
		console.log("ajax call succeeded");
		console.log(data);
	});

	test.fail(function(){
		console.log("Oh no! Error in ajax call");
	});

});