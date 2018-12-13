const {Given, When, Then, Before, setDefaultTimeout} = require("cucumber");
const config = require('config');
const assert = require('assert');
const api = require('../../libs/handlers/productAPITest');

setDefaultTimeout(30 * 100);


Before(function (scenario, callback) {
    this.currentScenarioName = scenario.pickle.name;
    callback();
});


Given('valid fields and making a GET request to products {string} then it should return a {string} and a response body of product details', function (ProductName, StatusCode, callback)
{
           // Write code here that turns the phrase above into concrete actions
           api.products(ProductName).then(function(response){
            assert.deepEqual(response.statusCode, StatusCode);
            assert.strictEqual(response.productName, ProductName);
            assert.strictEqual(response.productDisplay, "REST Assured Jar");
            assert.strictEqual(response.fulfillmentEN, "Your Order Is Processed. Proceed downloading the file.");
            assert.strictEqual(response.fulfillmentES, "Su pedido es procesado. Continúa descargando el archivo.");
            assert.deepEqual(response.price, "14.95");
            callback(null);
           }).catch(function(error){
               console.log(error);
           })
           
         });

 Given('valid fields and making a POST {string} request to products {string} then it should return a {string} and a success response body', function (Type, ProductName, StatusCode, callback) {
            // Write code here that turns the phrase above into concrete actions
            api.products_id(Type, ProductName).then(function(response){
                assert.deepEqual(response.statusCode, StatusCode);
                assert.strictEqual(response.productName, ProductName);
                assert.strictEqual(response.action, "product.update");
                assert.strictEqual(response.result, "success");
                callback(null);
            })
  });

  Given('valid fields and making a GET request to products {string} then it should return a {string} and a response body of updated product details', function (ProductName, StatusCode, callback) {
    // Write code here that turns the phrase above into concrete actions
    api.products(ProductName).then(function(response){
        assert.deepEqual(response.statusCode, StatusCode);
        assert.strictEqual(response.productName, ProductName);
        assert.strictEqual(response.productDisplay, "REST Assured Jar for REST API's");
        assert.strictEqual(response.fulfillmentEN, "Your Order Is Processed. Proceed downloading the file.");
        assert.strictEqual(response.fulfillmentES, "Su pedido es procesado. Continúa descargando el archivo.");
        assert.deepEqual(response.price, "10.95");
        callback(null);
       }).catch(function(error){
           console.log(error);
       })
  });
