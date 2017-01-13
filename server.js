//1. DEPENDENCIES
//require express, mongoose and body-parser after they have been installed
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// 2. CONFIGURATION
var app = express();
// to check if the connection on localhost:3000 is working
// app.get('/', function(req, res){
//     res.send('working')
// }); //--> yes, it is working


// 5. DATABASE
// mongoose.connect('mongodb://localhost/mean_app');
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/mean_app';//tried it with & w/o 27017

mongoose.connect(mongoUri);

mongoose.connection.once('open', function(){
    console.log('connected to mongod');
})


// 6. CONTROLLERS
var productsController = require('./controllers/productsController.js');
app.use('/products', productsController);

var seedController = require('./controllers/seedController.js');
app.use('/seed', seedController);


// 4. MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.json());


//3. LISTENER
app.listen(port, function() {
    console.log('mean app is listening');
});
