Todos	= new Meteor.Collection("todos");

Doing 	= new Meteor.Collection("doings");

Done	= new Meteor.Collection("done");

Meteor.publish("todos", function(){
	return Todos.find();
});

Meteor.publish("doing", function(){
	return Doing.find();

});

Meteor.publish("done", function(){
	return Done.find();
});
