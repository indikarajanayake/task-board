Todos	= new Meteor.Collection("todos");

Doing 	= new Meteor.Collection("doings");

Done	= new Meteor.Collection("done");

Meteor.publish("todos", function(){
	return Todos.find();
});
