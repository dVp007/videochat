const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors');
const socket = require('socket.io');
const {
  v4: uuidv4
} = require('uuid');
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
require('dotenv').config();

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

var activeUsers = [];

app.get('/token', (req, res) => {
  console.log('accountSID:', twilioAccountSid);
  console.log('API KEY:', twilioApiKeySID);
  console.log('API Secret:', twilioApiKeySecret);
  const {
    identity,
    roomName
  } = req.query;
  const token = new AccessToken(
    'AC07deb1575a8c94e295ae46fb2c31e86e',
    'SK11e2a6d6d727d4790255e32ec03ba750',
    'OE9KauaT8qONjuX7HCs2vrpk4YDTzcr1', {
      ttl: MAX_ALLOWED_SESSION_DURATION,
    }
  );
  token.identity = identity;
  const videoGrant = new VideoGrant({
    room: roomName
  });
  token.addGrant(videoGrant);
  res.status(200).send({
    token: token.toJwt()
  });
  console.log(`issued token for ${identity} in room ${roomName}`);
});

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'build/index.html')));

var server = app.listen(8081, () => console.log('token server running on 8081'));
const io = socket(server);
io.on('connection', async function (socket) {
  console.log('Made a socket connection');
  socket.on('new-user', function (data) {
    console.log(data)
    activeUsers.push({
      username: data,
      id: socket.id
    });
    io.emit('new-users', [...activeUsers]);
  });
  socket.on('sendMessage', function (data) {
    console.log(data)
    socket.broadcast.to(data.id).emit('recieveMessage', JSON.stringify({
      roomName: data.roomName,
      username: data.username
    }));
  });
  socket.on('disconnect', function () {
    console.log('Socket :', socket.id)
    activeUsers = activeUsers.filter(e => e.id !== socket.id)
    console.log(activeUsers)
    io.emit('User disconnected', socket.userId);
  });
});