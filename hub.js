let express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

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

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log(`Listening for requests on port ${app.get('port')}.`);
});