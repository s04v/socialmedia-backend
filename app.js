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
const WallCtrl = require('./controllers/wall');
const MeCtrl = require('./controllers/me');

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

app.post('/account/signin', SingInCtrl);
app.post('/account/signup', SingUpCtrl);
app.post('/account/logout', idle);
app.get('/user/:id', AuthVerify, UserCtrl.getUser);
app.get('/user/:id/friends', AuthVerify, UserCtrl.getFriends);
app.put('/user/:id/friends', AuthVerify, UserCtrl.putFriend);
app.get('/me', MeCtrl);
app.post('/me/upload', idle);
app.get('/me/friends', idle);
app.post('/friends/add', idle);
app.post('/friends/delete', idle);
app.get('/wall/:id', WallCtrl.allPosts);
app.put('/wall/:id', WallCtrl.addPost);
app.delete('/wall/:id', idle);


app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000");
});
