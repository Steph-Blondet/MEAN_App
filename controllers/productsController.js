//1.
var express = require('express');
var router = express.Router();

var Product = require('../models/products.js');


//2. INDEX
router.get('/', function(req, res) {
    Product.find(function(err, data) {
		res.send(data);
	});
    // res.send('foods index'); //--> working
}); //--> ok


//3. GET ROUTE
//to get all the products in json
router.get('/allProducts', function(req, res) {
	Product.find('product', function(err, allProducts) {
		res.send(allProducts);
	});
    // res.send('all products'); //-->working
});

//
// //4. GET ROUTE
// //gets all images links that match the product name sent through the URI
// router.get('/byName/:name', function(req, res) {
// 	Product.find({ product: req.params.data }, function(err, productInfo) {
// 		res.send(productInfo);
// 	});
// });




//1.
module.exports = router;
