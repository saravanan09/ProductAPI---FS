Feature: Product API - Foot Spring

@POST_products_reset
Scenario: To validate POST /products/{product_id}

Given valid fields and making a POST "reset" request to products "sarav-12112018" then it should return a "200" and a success response body

@GET_products
Scenario: To validate GET /products/{products_id}

Given valid fields and making a GET request to products "sarav-12112018" then it should return a "200" and a response body of product details

@POST_products_update
Scenario: To validate POST /products/{product_id}

Given valid fields and making a POST "update" request to products "sarav-12112018" then it should return a "200" and a success response body

@GET_products_after_update
Scenario: To validate GET /products/{products_id}

Given valid fields and making a GET request to products "sarav-12112018" then it should return a "200" and a response body of updated product details
