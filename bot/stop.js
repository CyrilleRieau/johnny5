const five = require("johnny-five");
//let Robot = require('./Robot.js');
//let robot = new Robot();

module.exports = function stop() {
    var board = new five.Board();
    var l_motor = r_motor = null;
    board.on("ready", function(err) {

        l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
        r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });
        board.repl.inject({
            l_motor: l_motor,
            r_motor: r_motor
        });
        l_motor.stop();
        r_motor.stop();

        //      robot.active = true;
    });
};