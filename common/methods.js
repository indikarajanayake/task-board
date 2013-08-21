Meteor.methods({
	
	addTask: function(newTask){
		return Todos.insert(newTask);
	},
	removeTask: function(text){
		Todos.remove({text: text});
	}

});
