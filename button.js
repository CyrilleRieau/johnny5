// Adapted from Johnny Five Example for JS Conf CN nodebots session.
// Button class doesn't appear to work so this will do it for what you need
// Potentially just emit an event if you need it.

var five = require("johnny-five");
var pixel = require("node-pixel");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);

board.on("ready", function() {

    // Create a new `button` hardware instance.
    // This example allows the button module to
    // create a completely default instance
    console.log("Board ready");

    var button = new five.Button({
        pin: "A7",
        controller: "TINKERKIT",
        invert: true
    });

    button.on("press", function() {
        console.log("pressed");
        strip = new pixel.Strip({
            data: 13,
            length: 2,
            board: board,
            controller: "FIRMATA",
        });

        strip.on("ready", function() {
            strip.color("#000000");
            strip.show();
        });

    });

    button.on("release", function() {
        console.log("released");
        strip = new pixel.Strip({
            data: 13,
            length: 2,
            board: board,
            controller: "FIRMATA",
        });

        strip.on("ready", function() {
            strip.color("#006400");
            strip.show();
        });

    });

    button.on("hold", function() {
        console.log("held");
        strip = new pixel.Strip({
            data: 13,
            length: 2,
            board: board,
            controller: "FIRMATA",
        });

        strip.on("ready", function() {
            strip.color("#000064");
            strip.show();
        });

    });

});