const express = require('express');
const app = express();
const port = 3000;

const idle = (req, res) => {
    res.send("Idle");
}

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/account/sigin', idle);
app.post('/account/sigup', idle);
app.post('/account/logout', idle);
app.get('/user/:id', idle);
app.get('/user/:id/friends', idle);
app.get('/me', idle);
app.post('/me/upload', idle);
app.get('/me/friends', idle);
app.post('/friends/add', idle);
app.post('/friends/delete', idle);

app.listen(port, () => {
    console.log("Server started on port 3000");
});