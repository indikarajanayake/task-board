Meteor.methods({
	
	addTask: function(newTask){
		if(Todos.find().count()<5){
		return Todos.insert(newTask);
		}else{
			alert( "maximum number of tickets reached");
		}				
	},
	removeTask: function(text){
		Todos.remove({text:text});
	}

});
