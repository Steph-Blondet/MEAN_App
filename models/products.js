//1
var mongoose = require('mongoose');

//2
var productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String
});

//3
var Product = mongoose.model('Product', productSchema);

//4
module.exports = Product;
