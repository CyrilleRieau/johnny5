var five = require("johnny-five");
var pixel = require("node-pixel");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);
var strip = null;
board.on("ready", function(err) {
    var button = new five.Button({
        pin: "A7",
        controller: "TINKERKIT",
        invert: true
    });

    strip = new pixel.Strip({
        data: 13,
        length: 2,
        board: board,
        controller: "FIRMATA",
    });

    button.on("press", function() {
        console.log('press');
        strip.color("#7F00FF");
        strip.show();
    });
});