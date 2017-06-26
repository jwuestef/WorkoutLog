$(function() {
	$.extend(WorkoutLog, {
		definition: {
			userDefinitions: [],
			create: function() {
				var def = {
					desc: $("#def-description").val(),
					type: $("#def-logtype").val()
				};
				var postData = { definition: def };
				var define = $.ajax({
					type: "POST",
					url: WorkoutLog.API_BASE + "definition",
					data: JSON.stringify(postData),
					contentType: "application/json"
				});

				define.done(function(data){
					WorkoutLog.definition.userDefinitions.push(data.definition);
					console.log(data);     //added this extra with Bryce to get the object to print out at the end of module 18, as the tutorial expects an object in the console
				});

			},
			fetchAll: function() {
				var fetchDefs = $.ajax({
					type: "GET",
					url: WorkoutLog.API_BASE + "definition",
					headers: {
						"authorization": window.localStorage.getItem("sessionToken")
					}
				})
				.done(function(data) {
					WorkoutLog.definition.userDefinitions = data;
				})
				.fail(function(err) {
					console.log(err);
				});
			}
		}
	});

	//bindings     -   this is where we create a workout definition or category.
	$("#def-save").on("click", WorkoutLog.definition.create);

	//fetch definitions if we already are authenticated and refreshed
	if(window.localStorage.getItem("sessionToken")) {
		WorkoutLog.definition.fetchAll();
	};     //this statement says - when there is a sessionToken (an authenticated user) grab all the workout definition types aka categories.
});