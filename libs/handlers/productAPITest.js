const fs = require('fs');
const https = require('https');
const assert = require('assert');
const config = require('config');
var rp = require('request-promise');
const product_update = config.get('productUpdate');
const product_reset = config.get('productReset');
const authenticate = config.get('authenticate');

exports.products = function (productName) {
    return rp({
        method: 'GET',
        url: 'https://qa-api.fastspring.com/products/'+productName,
        auth: authenticate,
        resolveWithFullResponse: true,
        json: true
    }).then(function (res) {
        var statusCode = res.statusCode;
        var productName =  res.body.products[0].product;
        var productDisplay = res.body.products[0].display.en;
        var fulfillmentEN = res.body.products[0].fulfillments.instructions.en;
        var fulfillmentES = res.body.products[0].fulfillments.instructions.es;
        var price = res.body.products[0].pricing.price.USD;
        return {
            statusCode,
            productName,
            productDisplay,
            fulfillmentEN,
            fulfillmentES,
            price
        };
        }).catch(function (error) {
            console.error('connection error: ' + error);
        });
};

exports.products_id = function (type, productName) {
    return rp({
        method: 'POST',
        url: 'https://qa-api.fastspring.com/products/'+productName,
        auth: authenticate,
        body: type === "update" ? product_update : product_reset,
        resolveWithFullResponse: true,
        json: true
    }).then(function (res) {
        var statusCode = res.statusCode;
        var productName =  res.body.products[0].product;
        var action = res.body.products[0].action;
        var result = res.body.products[0].result;
        return {
            statusCode,
            productName,
            action,
            result
        };
        }).catch(function (error) {
            console.error('connection error: ' + error);
        });
};
