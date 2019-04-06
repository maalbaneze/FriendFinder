
module.exports = function (app) {

    // Friend Finder friends (DATA)
    // =============================================================
    var friends = [
        {
            routeName: "ahmed",
            name: "Ahmed",
            photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            scores: [
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
            ]
        },
        {
            routeName: "francis",
            name: "Francis",
            photo: "https://i.ytimg.com/vi/qdbfJeI1Y1I/hqdefault.jpg",
            scores: [
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5
            ]
        },
    ];

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
};