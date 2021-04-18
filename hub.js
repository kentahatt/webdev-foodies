let express = require('express');
let app = express();

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

app.get('/login', function(request, response){
  let user = request.body.loginUser;
  console.log("got itttttttttttttttttttt");
  console.log(user);
});

app.post('/create', function(request, response) {
  let userData = {
      username: request.body.username,
      password: request.body.password,
  };


  model.User.find({username: request.body.username,}).then(function(userList) {
      if (userList.length > 0) {
      } else {
          // there is no student with that sid
          let newUser = new model.User(userData);
          newUser.save(function(error) {
              if (error) {
                  console.error('Unable to add student:', error);
              } else {
                  console.log('User added');
              }
          });
      }
  });

});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log(`Listening for requests on port ${app.get('port')}.`);
}); 