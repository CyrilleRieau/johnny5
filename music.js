// Adapted from Johnny-Five Piezo example for NodeBots session at JSConf CN

var five = require("johnny-five");
var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);

board.on("ready", function() {
    // Creates a piezo object and defines the pin to be used for the signal
    var piezo = new five.Piezo(8);

    // Plays a song

    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song = {
        "notes": ["E4", "G4", "A4", "A4", null,
            "A4", "B4", "C5", "C5", null,
            "C5", "D5", "B4", "B4", null,
            "A4", "G4", "A4", null,

            "E4", "G4", "A4", "A4", null,
            "A4", "B4", "C5", "C5", null,
            "C5", "D5", "B4", "B4", null,
            "A4", "G4", "A4", null,

            "E4", "G4", "A4", "A4", null,
            "A4", "C5", "D5", "D5", null,
            "D5", "E5", "F5", "F5", null,
            "E5", "D5", "E5", "A4", null,

            "A4", "B4", "C5", "C5", null,
            "D5", "E5", "A4", null,
            "A4", "C5", "B4", "B4", null,
            "C5", "A4", "B4", null,

            "A4", "A4",
            "A4", "B4", "C5", "C5", null,
            "C5", "D5", "B4", "B4", null,
            "A4", "G4", "A4", null,

            "E4", "G4", "A4", "A4", null,
            "A4", "B4", "C5", "C5", null,
            "C5", "D5", "B4", "B4", null,
            "A4", "G4", "A4", null,

            "E4", "G4", "A4", "A4", null,
            "A4", "C5", "D5", "D5", null,
            "D5", "E5", "F5", "F5", null,
            "E5", "D5", "E5", "A4", null,

            "A4", "B4", "C5", "C5", null,
            "D5", "E5", "A4", null,
            "A4", "C5", "B4", "B4", null,
            "C5", "A4", "B4", null,

            "E5", null, null, "F5", null, null,
            "E5", "E5", null, "G5", null, "E5", "D5", null, null,
            "D5", null, null, "C5", null, null,
            "B4", "C5", null, "B4", null, "A4",

            "E5", null, null, "F5", null, null,
            "E5", "E5", null, "G5", null, "E5", "D5", null, null,
            "D5", null, null, "C5", null, null,
            "B4", "C5", null, "B4", null, "A4"
        ],
        "durations": [
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.375, 0.125,

            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.375, 0.125,

            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.125, 0.250, 0.125,

            0.125, 0.125, 0.250, 0.125, 0.125,
            0.250, 0.125, 0.250, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.375, 0.375,

            0.250, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.375, 0.125,

            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.375, 0.125,

            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.125, 0.250, 0.125,

            0.125, 0.125, 0.250, 0.125, 0.125,
            0.250, 0.125, 0.250, 0.125,
            0.125, 0.125, 0.250, 0.125, 0.125,
            0.125, 0.125, 0.375, 0.375,

            0.250, 0.125, 0.375, 0.250, 0.125, 0.375,
            0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.375,
            0.250, 0.125, 0.375, 0.250, 0.125, 0.375,
            0.125, 0.125, 0.125, 0.125, 0.125, 0.500,

            0.250, 0.125, 0.375, 0.250, 0.125, 0.375,
            0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.375,
            0.250, 0.125, 0.375, 0.250, 0.125, 0.375,
            0.125, 0.125, 0.125, 0.125, 0.125, 0.500
        ]
    }

    let tab2 = [];
    for (let i = 0; i < song.durations.length; i++) {
        let tab1 = [];
        tab1.push(song.notes[i], song.durations[i]);
        tab2.push(tab1);
    };

    piezo.play({
        song: tab2,
        tempo: 62
    });

    // Plays the same song with a string representation
    /*piezo.play({
        // song is composed by a string of notes
        // a default beat is set, and the default octave is used
        // any invalid note is read as "no note"
        //song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
        //song: "E E E E E E G C D E - F F F F F E E E E D D E D G",
        //song: "E E E C E G G C G E A B Bb A G E G A F G E C D B C",
        song: "A B C - C D E - F G F - E D C - B A B - C D E - F G F - E F D",
        beats: 1 / 4,
        tempo: 50
    });*/
});