const five = require("johnny-five");

let board = new five.Board();
let l_motor = null;
let r_motor = null;

board.on("ready", function() {

    l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
    r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });

    console.log("Board ready");
    let button = new five.Button({
        pin: "A7",
        controller: "TINKERKIT",
        invert: true
    });

    board.repl.inject({
        l_motor: l_motor,
        r_motor: r_motor
    });

    button.on("press", function() {
        console.log("pressed");
        /*
                                r_motor.on("reverse", function(err, timestamp) {
                                    board.wait(2000, function() {
                                        r_motor.forward(180);
                                    });
                                });

                                l_motor.on("forward", function(err, timestamp) {
                                    board.wait(2900, function() {
                                        l_motor.reverse(180);
                                    });
                                });
                                setTimeout(function() {
                                            l_motor.on("reverse", function(err, timestamp) {
                                                board.wait(100, function() {
                                                    l_motor.forward(180);
                                                });
                                            });

                                            r_motor.on("forward", function(err, timestamp) {
                                                board.wait(100, function() {
                                                    r_motor.reverse(180);
                                                });
                                            });
                                            // }, 2000);*/

        l_motor.forward(180);
        r_motor.reverse(180);

        setTimeout(function() {
            r_motor.forward(180);
            l_motor.forward(180);

            setTimeout(function() {
                l_motor.forward(180);
                r_motor.reverse(180);

                setTimeout(function() {
                    l_motor.stop();
                    r_motor.stop();
                }, 1500);
            }, 1100);
        }, 1500);
    })
})