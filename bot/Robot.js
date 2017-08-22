var five = require("johnny-five");

class Robot {
    constructor() {
        this.modules = [];
    }

    addModule(module) {
        this.modules.push(module);
    }

    start() {
        const that = this;
        this.board = new five.Board();
        this.board.on('ready', function() {
            that.leftMotor = new five.Motor({
                pins: { pwm: 6, dir: 7 }
            });
            that.rightMotor = new five.Motor({
                pins: { pwm: 5, dir: 4 }
            });
            for (let module of that.modules) {
                module.init(that);
            }
        });
    }

    moveForward() {

        this.leftMotor.reverse(160);
        this.rightMotor.forward(160);
    }
    moveDown() {

        this.leftMotor.forward(160);
        this.rightMotor.reverse(160);
    }
    moveLeft() {

        this.leftMotor.forward(160);
        this.rightMotor.forward(160);
    }
    moveRight() {

        this.leftMotor.reverse(160);
        this.rightMotor.reverse(160);
    }

    stop() {
        this.leftMotor.stop();
        this.rightMotor.stop();
    }
}

module.exports = Robot;