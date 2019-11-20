'use strict'

exports.pagination = (page, query) => {
    let limit = 15
    let offset = (page * limit) - limit;
    let sqlQuery = query + ` LIMIT ${limit} OFFSET ${offset};`;

    return sqlQuery;
}