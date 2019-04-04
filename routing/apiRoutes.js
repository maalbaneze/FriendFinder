
var friendsData = require("../data/friendsData");

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/public/survey", function (req, res) {
        res.json(surveyData);
    });

    app.post("/public/survey", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        if (surveyData.length < 10) {
            surveyData.push(req.body);
            res.json(true);
        }
        else {
            res.json(false);
        }
    });










    // Displays a single character, or returns false
    app.get("/api/friends/:friend", function (req, res) {
        var chosen = req.params.friend;

        console.log(chosen);

        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].routeName) {
                return res.json(friends[i]);
            }
        }

        return res.json(false);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newfriend = req.body;
        console.log("CHAR NAME: ", newfriend.name);
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newfriend);

        characters.push(newfriend);

        res.json(newfriend);
    });