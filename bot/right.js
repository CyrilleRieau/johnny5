function moveRight() {
    const five = require("johnny-five");
    var board = new five.Board({ port: process.argv[2] });
    var l_motor = r_motor = null;
    board.on("ready", function(err) {

        l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
        r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });

        r_motor.reverse(160);
        l_motor.reverse(160);
    });
}
module.exports = moveRight;