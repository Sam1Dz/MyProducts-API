'use strict'

const time = require('moment');
const responses = require('../responses.js');
const connection = require('../connection.js');

// Get Categories
exports.getCategories = (req, res) => {
    connection.query(
        'SELECT * FROM tb_category;',
        function (err, rows) {
            if (err) {
                responses.error('Error while Getting Categories Data!', err, 500, res);
            } else {
                responses.dataMapping('Success Get Data Categories', rows, res);
            }
        }
    )
    console.log("Categories Function (getCategories) Requested at " + time().format('DD/MM/YYYY HH:mm:ss') + ' (UTC+7)');
}

// Insert Categories
exports.insertCategories = (req, res) => {
    let name = req.body.name;
    connection.query(
        'INSERT INTO tb_category SET name=?;', [name],
        function (err, rows) {
            if (err) {
                responses.error('Error while Inserting Categories Data!', err, 500, res);
            } else {
                let data = {
                    id: rows.insertId,
                    name: name
                }
                responses.dataMapping('Success Insert Data Categories', data, res);
            }
        }
    )
    console.log("Categories Function (insertCategories) Requested at " + time().format('DD/MM/YYYY HH:mm:ss') + ' (UTC+7)');
}

// Update Categories
exports.updateCategories = (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    connection.query(
        'UPDATE tb_category SET name=? WHERE id=?;', [name, id],
        function (err) {
            if (err) {
                responses.error('Error while Updating Categories Data!', err, 500, res);
            } else {
                let data = {
                    id: Number(id),
                    name: name
                }
                responses.dataMapping('Success Update Data Categories', data, res);
            }
        }
    )
    console.log("Categories Function (updateCategories) Requested at " + time().format('DD/MM/YYYY HH:mm:ss') + ' (UTC+7)');
}

// Delete Categories
exports.deleteCategories = (req, res) => {
    let id = req.params.id;
    connection.query(
        'DELETE FROM tb_category WHERE id=?;', [id],
        function (err) {
            if (err) {
                responses.error('Error while Deleting Categories Data!', err, 500, res);
            } else {
				let data = {
                    id: Number(id)
                }
                responses.dataMapping('Success Delete Data Categories', data, res);
            }
        }
    )
    console.log("Categories Function (deleteCategories) Requested at " + time().format('DD/MM/YYYY HH:mm:ss') + ' (UTC+7)');
}