'use strict'

const responses = require('./responses');
const products = require('./controllers/products');
const category = require('./controllers/categories')

module.exports = function (app) {
    // Test Function
    app.get("/api/v1/", function (req, res) { responses.ok("MyProduct API Connected Successfully", res); console.log("Test Function Requested"); });

    // Products Function
    app.get("/api/v1/get_products", products.getProducts);
    app.post("/api/v1/insert_products", products.insertProducts);
    app.patch("/api/v1/update_products/:id", products.updateProducts);
    app.delete("/api/v1/delete_products/:id", products.deleteProducts);

    // Categories Function
    app.get("/api/v1/get_categories", category.getCategories);
    app.post("/api/v1/insert_categories", category.insertCategories);
    app.patch("/api/v1/update_categories/:id", category.updateCategories);
    app.delete("/api/v1/delete_categories/:id", category.deleteCategories);
}