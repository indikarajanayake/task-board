Meteor.methods({
	
	addTask: function(newTask){
		if(Todos.find().count()<5){
	//	Doing.remove({});	
		return Todos.insert(newTask);
		
		}else{
			alert( "maximum number of tickets reached");
		}				
	},
	removeTask: function(text){
		Todos.remove(text);
	},
	addDoing : function(id){
		var task = Todos.findOne({ _id: id});
		if(task){		
		Doing.insert(task);
		return Todos.remove(id);
		}		
	},
	backTodo : function(id){
		var task = Doing.findOne({_id: id});
		if(task){
		Todos.insert(task);
		Doing.remove(id);
		}
	},
	editTask: function(task){
		Todos.update(task.id, {$set :{text: task.text}});
	}	

	
});
