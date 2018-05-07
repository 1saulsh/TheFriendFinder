//require survey data from friends.js file(not sure why files dont connect. maybe package.json problem)

//var friends = require("../data/friends.js");

module.exports = function (app) {

    //build a GET route with the url /api/friends to view friends in JSON format
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });
    
    //A POST route with /api/friends will be used to handle incoming survey results
    app.post("/api/friends", function(req,res) {
        
        //retrieve new friend input
        var bestMatch = {
        name: "",
        photo: "",
        //tracks differences between answers
        friendDifference: 1000  
        };

        //Here we take the result of the user's survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;

        //This variable will calculate the difference between the user's scores and the scores of each user in the database
        var totalDifference =0;
        
        //Here we loop through all the friend possibilities in the database
        for (var i=0; i<friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;

            //we then loop through all the scores of each friend
            for (var j =0; j<friends[i].scores[j]; j++) {

                //We calculate the difference between the scores and sum them into the totalDifference. Math absolute returns a postive number even if answer is negative
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                //If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    //Reset the bestMatch to be the new friend
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        //finally save the user's data to the database 
        friends.push(userData);

        //return a JSON with the user's bestMatch, This will be used by the HTML in the next page
        res.json(bestMatch);
    });
}

//Export for use in main server.js file
//module.exports = apiRoutes;