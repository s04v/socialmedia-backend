require('dotenv').config();

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors')
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
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.get('/', (req, res) => {
    res.send('Hello world');
});

// TODO: fix AuthVerify
app.post('/account/signin', SingInCtrl);
app.post('/account/signup', SingUpCtrl);
app.post('/account/logout', idle);
app.get('/user/:id', UserCtrl.getUser); // TODO: AuthVerify
app.get('/user/:id/friends', AuthVerify, UserCtrl.getFriends);
app.get('/user/:id/friends/status', AuthVerify, UserCtrl.status);
app.get('/me', AuthVerify, MeCtrl.Me);
app.post('/me/upload', idle);
app.get('/me/friends', MeCtrl.getFriends);
app.get('/wall/:id', WallCtrl.allPosts);
app.post('/wall/:id', WallCtrl.addPost);
app.delete('/wall/:id', idle);


app.listen(process.env.PORT, () => {
    console.log("Server started on port 3001");
});

/*const server = require('http').Server(app);
const io = require("socket.io")(server);

io.on('connection', (socket) => {
    console.log("socket connected");
});
*/

/*server.listen(3001,() => {
    console.log("Server started on port 3001");
});*/
