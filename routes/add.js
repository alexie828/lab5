var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newFriend = {
		'name': req.query.name,
		'description': req.query.description,
		'imageURL': "http://lorempixel.com/400/400/people"
	}
	res.render('add', newFriend);
	console.log(newFriend);
	data["friends"].push(newFriend);
 }