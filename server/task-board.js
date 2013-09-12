Todos	= new Meteor.Collection("todos");

Doing 	= new Meteor.Collection("doings");

Done	= new Meteor.Collection("done");

Doing.remove();

Meteor.publish("todos", function(){
	return Todos.find();
});

Meteor.publish("doings", function(){
	return Doing.find();

});

Meteor.publish("done", function(){
	return Done.find();
});
