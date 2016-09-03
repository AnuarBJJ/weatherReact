// Require our dependencies
var express = require('express');

// Create an express instance and set a port variable
var app = express();
const PORT = process.env.PORT || 8080;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] == 'https'){
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public"));

// Fire it up (start our server)
app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
