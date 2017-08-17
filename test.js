var five = require('johnny-five');
var songs = require('j5-songs');
var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);

board.on("ready", function() {
    var piezo = new five.Piezo(9);

    // Load a song object 
    var song = songs.load('never-gonna-give-you-up');

    // Play it ! 
    piezo.play(song);

    // List all songs 
    songs.list(function(err, tunes) {
        // Object literal with all the songs 
    });
});