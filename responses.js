'use strict'

exports.ok = (message, res) => {
    const result = {
        error: false,
        message: message,
    };
    res.status(200);
    res.json(result);
    res.end();
}

exports.dataMapping = (message, data, res, page, totalPage) => {
    let result = {};

    if(page != null && totalPage != null) {
        result = {
            data: data,
            error: false,
            message: message,
            page: page ? Number(page) : Number(totalPage),
            totalPage: totalPage ? Number(totalPage) : Number(totalPage)
        };
    } else {
        result = {
            data: data,
            error: false,
            message: message
        };
    }

    res.status(200);
    res.json(result);
    res.end();
}

exports.error = (message, detail, code, res) => {
    const result = {
        error: true,
        message: message,
        errorDetail: detail
    };
    res.status(code);
    res.json(result);
    res.end();
}
