'use strict'

const time = require('moment');
const responses = require('../responses.js');
const connection = require('../connection.js');
const { pagination } = require('../library/pagination.js');

// Get Products
exports.getProducts = (req, res) => {
    let page = req.query.page ? req.query.page : 1;
    let query = `SELECT tbP.id AS id, tbP.title AS title, tbP.description AS description, tbP.category AS category, tbC.name AS categoryName, tbP.date_created AS dateCreated, tbP.date_updated AS dateUpdated FROM tb_product AS tbP LEFT JOIN tb_category AS tbC ON tbP.category = tbC.id`;

    let result = pagination(page, query);
    connection.query(
        result[0],
        (err, rows) => {
            if (err) {
                responses.error('Error while Getting Products Data!', err, 500, res);
            } else {
                connection.query(
                    "SELECT COUNT(id) AS total FROM tb_product",
                    (err, totalData) => {
                        if (err) {
                            responses.error('Error while Getting Products Data!', err, 500, res);
                        } else {
                            responses.dataMapping('Success Get Data Poducts', rows, res, page, Math.ceil(totalData[0].total/result[1]));
                        }
                    }
                )
            }
        }
    )

    console.log("Products Function (getProducts) Requested at " + time().format('DD/MM/YYYY HH:mm:ss') + ' (UTC+7)');
}

// Search Products
exports.searchProducts = (req, res) => {
    let page = req.query.page ? req.query.page : 1;
    let searchQuery = req.query.search ? req.query.search : "";
    let query = `SELECT tbP.id AS id, tbP.title AS title, tbP.description AS description, tbP.category AS category, tbC.name AS categoryName, tbP.date_created AS dateCreated, tbP.date_updated AS dateUpdated FROM tb_product AS tbP LEFT JOIN tb_category AS tbC ON tbP.category = tbC.id WHERE tbP.title LIKE '%${searchQuery}%'`

    let result = pagination(page, query);
    connection.query(
        result[0],
        function (err, rows) {
            if (err) {
                responses.error('Error while Searching Products Data!', err, 500, res);
            } else {
                connection.query(
                    `SELECT COUNT(id) AS total FROM tb_product WHERE title LIKE '%${searchQuery}%'`,
                    (err, totalData) => {
                        if (err) {
                            responses.error('Error while Getting Products Data!', err, 500, res);
                        } else {
                            responses.dataMapping('Success Search Data Poducts', rows, res, page, Math.ceil(totalData[0].total/result[1]));
                        }
                    }
                )
            }
        }
    )
    
    console.log("Products Function (searchProducts) Requested at " + time().format('DD/MM/YYYY HH:mm:ss') + ' (UTC+7)');
}

// Insert Products
exports.insertProducts = (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let category = req.body.category;
    let datetime = time().format('YYYY-MM-DD HH:mm:ss');
    connection.query(
        'INSERT INTO tb_product SET title=?, description=?, category=?, date_created=?, date_updated=?;', [title, description, category, datetime, datetime],
        function (err, rowsProducts) {
            if (err) {
                responses.error('Error while Inserting Products Data!', err, 500, res);
            } else {
                connection.query(
                    'SELECT name FROM tb_category WHERE id=?;', [category],
                    function (err, rowsCategories) {
                        if (err) {
                            responses.error('Error while Getting Categories Data!', 500, res);
                        } else {
                            let data = {
                                id: rowsProducts.insertId,
                                title: title,
                                description: description,
                                category: category,
                                categoryName: rowsCategories[0].name,
                                dateCreated: datetime,
                                dateUpdated: datetime
                            }
                            responses.dataMapping('Success Insert Data Poducts', data, res);
                        }
                    }
                )
            }
        }
    )
    console.log("Products Function (insertProducts) Requested at " + time().format('DD/MM/YYYY HH:mm:ss') + ' (UTC+7)');
}

// Update Products
exports.updateProducts = (req, res) => {
    let id = req.params.id;
    let title = req.body.title;
    let description = req.body.description;
    let category = req.body.category;
    let datetime = time().format('YYYY-MM-DD HH:mm:ss');
    connection.query(
        'UPDATE tb_product SET title=?, description=?, category=?, date_updated=? WHERE id=?;', [title, description, category, datetime, id],
        function (err) {
            if (err) {
                responses.error('Error while Updating Products Data!', err, 500, res);
            } else {
                connection.query(
                    'SELECT name FROM tb_category WHERE id=?;', [category],
                    function (err, rowsCategories) {
                        if (err) {
                            responses.error('Error while Getting Categories Data!', 500, res);
                        } else {
                            let data = {
                                id: Number(id),
                                title: title,
                                description: description,
                                category: category,
                                categoryName: rowsCategories[0].name,
                                dateUpdated: datetime
                            }
                            responses.dataMapping('Success Update Data Poducts', data, res);
                        }
                    }
                )
            }
        }
    )
    console.log("Products Function (updateProducts) Requested at " + time().format('DD/MM/YYYY HH:mm:ss') + ' (UTC+7)');
}

// Delete Products
exports.deleteProducts = (req, res) => {
    let id = req.params.id;
    connection.query(
        'DELETE FROM tb_product WHERE id=?;', [id],
        function (err) {
            if (err) {
                responses.error('Error while Deleting Products Data!', err, 500, res);
            } else {
                let data = {
                    id: Number(id)
                }
                responses.dataMapping('Success Delete Data Poducts', data, res);
            }
        }
    )
    console.log("Products Function (deleteProducts) Requested at " + time().format('DD/MM/YYYY HH:mm:ss') + ' (UTC+7)');
}
