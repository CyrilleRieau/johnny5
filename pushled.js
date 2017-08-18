var five = require("johnny-five");
var pixel = require("node-pixel");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);
var strip = null;

var stdin = process.stdin;
stdin.setRawMode(true);
board.on("ready", function(err) {

    stdin.on('keypress', function(chunk, key) {
        // process the keypresses

        if (key) {
            switch (key.name) {
                case "up":
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
                    break;
                case "down":
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
                    break;
                case "left":
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
                    break;
                case "right":
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
                    break;

            }
        }
    });
});