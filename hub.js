let express = require('express');
let app = express();
var bodyParser = require('body-parser');

const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

const model = require('./public/model/model.js');


app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


app.use(session({
  genid: uuidv4,
  resave: false,
  saveUninitialized: false,
  // cookie: {secure: true},
  secret: '3230 examples typing fast need coffee'
}));

let http = require('http').createServer(app);
let io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('user connected');
  
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

app.get('/', function(request, response){
  response.sendFile(__dirname + '/public/Login.html');
});



app.post('/login', function(request, response) {


  model.User.find({username: request.body.loginUser, password: request.body.loginPass}).then(function(userList) {
      if (userList.length > 0) {
          // there is already a student with that sid
          response.sendFile(__dirname + '/public/store.html');
      } 
  });

});

app.post('/create', function(request, response) {
  
  console.log(request.body.createUser)
  console.log(request.body.createPass)
  let userData = {
    username: request.body.createUser,
    password: request.body.createPass, 
  };
  let newUser = new model.User(userData);
  newUser.save(function(error) {
      if (error) {
          console.error('Unable to add user:', error);
      } else {
          console.log('User added');
          response.sendFile(__dirname + '/public/store.html');
      }
  });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log(`Listening for requests on port ${app.get('port')}.`);
}); 