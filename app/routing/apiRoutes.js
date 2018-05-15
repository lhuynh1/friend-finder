var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {
        
        
        var user_res = user_input.scores;

        var friend_match = '';
        var friend_img = '';
        var score_diff = 100;

        for (var i = 0; i < friends.length; i++) {
            
            var difference = 0;
            // nested for loop
            for (var a = 0; a < user_res.length; a++) {
                // math.abs to return absolute value
                score_diff += math.abs(friendsData[i].scores[a] - user_res[a]);
            }

            if (difference < score_diff) {
                score_diff = difference;
                friend_match = friendsData[i].name;
                friend_img = friendsData[i].photo;
            }
        }

        friendsData.push(req.body);

    });
};