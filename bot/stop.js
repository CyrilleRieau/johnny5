const five = require("johnny-five");

module.exports = function stop() {
    var board = new five.Board();
    var l_motor = r_motor = null;
    board.on("ready", function(err) {

        l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
        r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });

        l_motor.stop();
        r_motor.stop();
    });
};