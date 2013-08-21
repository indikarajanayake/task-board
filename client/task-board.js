//list to store todo documents
Todos 	= new Meteor.Collection("todos");

//list to store doing documents
Doing	= new Meteor.Collection("doings");

//list to store done documents
Done	= new Meteor.Collection("done");

//Subscribe to todo collection
Deps.autorun(function(){
 Meteor.subscribe("todos");
	
});

Template.todos.todos = function(){
	return Todos.find();
};

Template.todos.events({
	'click #new-task-btn': function(event){
		var taskName	= $('#new-task').val();
		if(taskName!=''){
			var newTask =	{text:taskName};
			Meteor.call('addTask', newTask, function(err, result){
				if(err){
					alert("Could not enter the task");
				}
			});
		}
	}
	
});

Template.todo_item.events({
	'click .icon-trash' : function(){
		Meteor.call("removeTask", $(this).attr('text'), function(err,results){
			if(err){
				alert("Could not delete the task");
			}
		});			
	}		

});
