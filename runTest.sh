#!/usr/bin/env bash
node_modules/.bin/cucumber-js  --format json:./reports/cucumber-json-report.json --tags @GET_products_after_update
node reports/report.js

