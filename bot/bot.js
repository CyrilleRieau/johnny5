let express = require('express');
const app = express();
let up = require('./up');
let down = require('./down');
let left = require('./left');
let right = require('./right');
let stop = require('./stop');

app.use('/johnny5', express.static('bot'));
app.get('/johnny5/bot/up', function(req, res) {
    up();
    res.send('Hello');
});
app.get('/johnny5/bot/down', function(req, res) {
    down();
    res.send('Hello');
});
app.get('/johnny5/bot/left', function(req, res) {
    left();
    res.send('Hello');
});
app.get('/johnny5/bot/right', function(req, res) {
    right();
    res.send('Hello');
});
app.get('/johnny5/bot/stop', function(req, res) {
    stop();
    res.send('Hello');
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
})