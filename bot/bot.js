let express = require('express');
const app = express();
let Robot = require('./Robot');
let bot = new Robot();
bot.start();
app.use('/johnny5', express.static('bot'));

app.get('/johnny5/bot/up', function(req, res) {
    bot.moveForward();
    res.send('Up');
});
app.get('/johnny5/bot/down', function(req, res) {
    bot.moveDown();
    res.send('Down');
});
app.get('/johnny5/bot/left', function(req, res) {
    bot.moveLeft();
    res.send('Left');
});
app.get('/johnny5/bot/right', function(req, res) {
    bot.moveRight();
    res.send('Right');
});
app.get('/johnny5/bot/stop', function(req, res) {
    bot.stop();
    res.send('Stop');
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
})