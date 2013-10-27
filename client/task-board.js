//list to store todo documents
Todos 	= new Meteor.Collection("todos");

//list to store doing documents
Doing	= new Meteor.Collection("doings");

//list to store done documents
Done	= new Meteor.Collection("done");

//Subscribe to todo collection
Deps.autorun(function(){

	 Meteor.subscribe("todos");
	 Meteor.subscribe("doings");
	
});

Template.todos.todos = function(){
	return Todos.find();
};
Template.doing.doings = function(){
	return Doing.find();
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

		Meteor.call("removeTask", $(this).attr("_id"), function(err,results){
			if(err){
				alert("Could not delete the task");
			}
		});			
	},

	'click .edit-btn' : function(event){
		var editTask =  {id: $(this).attr("_id"), text:$("textarea#"+$(this).attr("_id")).val() }
		Meteor.call("editTask", editTask, function(err, result){

			if(err){
				alert("Could not edit the task");

			}
		});

		
	}				
		

});

Template.todo_item.rendered =function(){
    $(".draggable").draggable();
};

Template.doing.rendered = function(){
	$(".draggable").draggable();
};


Template.doing.rendered = function(){
	
	 $( ".tododroppable" ).droppable({
    		  drop: function( event, ui ) {
				var doingId = ui.draggable.attr("id");
				
				Meteor.call("backTodo", doingId, function(err, result){
					if(err){
						alert("Could not add to doing list");
					}
				
				});
			}
    });

	$(".draggable").draggable();
}

Template.todos.rendered = function(){
	//show hide the edit and display divs
	$(".edit_div").hide();
	$(".display_div").show();

	
	 $( ".doingdroppable" ).droppable({

    		  drop: function( event, ui ) {
	
				var doingId = ui.draggable.attr("id");
				
				Meteor.call("addDoing", doingId, function(err, result){
					if(err){
						alert("Could not add to doing list");
					}
				
				});
			}
    });

	$(".draggable").draggable();

		
	$("a.icon-edit").on("click", function(){
		$(this).siblings(".display_div").hide();
		$(this).siblings(".edit_div").show();
		
	});

	


}




;
