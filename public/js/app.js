console.log('app.js connected'); //--> yes

//1.
var app = angular.module('MeanApp', []);



//2.
app.controller('mainController', ['$http', function($http){

    var controller = this;
    // this.product = [];


//-------------------------------------------------
    //retrieve the list of all products when the page loads (images links)
    $http({
        method: 'GET',
        url: '/products'
    }).then(
        function(response) { //success
            console.log("this is the response"); //gets the array of objects
            controller.allProducts = response.data;
            console.log(response.data); //returns as object
        },
        function(response) { //failure
            console.log(response);
        }
    );


//-------------------------------------------------
    //get product info / click event
    // this.getProductInfo = function(product) {
    //
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:3000/products/byName/' + product
    //     }).then(
    //         function(response) {
    //             console.log(response);
    //             controller.productInfo = response.data;
    //             console.log(response.data);//response.data is returning as an empty object
    //             console.log(product.name);//returning the name of that specific product which is what I want
    //             console.log(product.price);
    //             console.log(product.description);
    //
    //      },
    //      function(response) {
    //             console.log(response);
    //      }
    //     );
    // };

//-------------------------------------------------
    //click event to add to cart
    // this.addToCart = function(){
    //
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:3000/products/cart'
    //     }).then(
    //         function(response) {
    //             console.log(response);
    //             console.log('buy button was clicked');
    //             controller.productInfo = response.data;
    //      },
    //      function(response) {
    //             console.log(response);
    //      }
    //     );
    //
    // };

    //click event to to subscribe
    this.includePath = 'partials/footerTemplate.html';
    this.subscribeToNews = function(){
      alert('you are now subscribed to eTrendy newsletter');
    };//end of subscribe function

}]); //--> end of function
