require('dotenv').config();

const express = require('express');
const app = express();

const db = require('./db/db');
const SingUpCtrl = require('./controllers/signUp');
const { cryptPassword, comparePasswordHash} = require('./utils/cryptPassword');


const idle = (req, res) => {
    res.send("Idle");

}

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    });

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/account/signin', idle);
app.post('/account/signup', SingUpCtrl);
app.post('/account/logout', idle);
app.get('/user/:id', idle);
app.get('/user/:id/friends', idle);
app.get('/me', idle);
app.post('/me/upload', idle);
app.get('/me/friends', idle);
app.post('/friends/add', idle);
app.post('/friends/delete', idle);

app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000");
});
