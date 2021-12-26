require('dotenv').config();


const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const db = require('./db/db');

const AuthVerify = require('./middleware/authVerify');

const SingUpCtrl = require('./controllers/signUp');
const SingInCtrl = require('./controllers/signIn');
const UserCtrl = require('./controllers/user');


const idle = (req, res) => {
    res.send("Idle");
}

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    });

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/account/signin', AuthVerify, SingInCtrl);
app.post('/account/signup', SingUpCtrl);
app.post('/account/logout', idle);
app.get('/user/:id', UserCtrl);
app.get('/user/:id/friends', idle);
app.get('/me', idle);
app.post('/me/upload', idle);
app.get('/me/friends', idle);
app.post('/friends/add', idle);
app.post('/friends/delete', idle);

app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000");
});
