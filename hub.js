let express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/public/Login.html');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log(`Listening for requests on port ${app.get('port')}.`);
});