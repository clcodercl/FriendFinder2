var friendData = requre('../data/friends.js');

module.exports = function (app) {
//api get requests
//below code handles when users visit page



app.get ('/api/friends', function (req, res) {
	var chosen = req.params.friends;

	if chosen = req.params.friends;

	if chosen {
		console.log(chosen);

		for (var i = 0; i < friends.length; i+++) {
			if (choosen === friends [i].routeName) {
				res.json(friends[i]);
				return;
			}
		}
	
		res.json(false);
	} else {
		res.json(friends);
	}
	});

app.post('/api/friends', function(req, res){
	var NewFriend = req.body;
}
}

}

}
