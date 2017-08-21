const express = require('express');
const app = express();

app.use('/johnny5', express.static('bot'));
app.get('/bot/up', function(res, req) {
    res.send(moveUp);
});
app.get('/bot/down', function(res, req) {
    res.send(moveDown);
});
app.get('/bot/left', function(res, req) {
    res.send(moveLeft);
});
app.get('/bot/right', function(res, req) {
    res.send(moveRight);
});
app.get('/bot/stop', function(res, req) {
    res.send(stop());
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
})