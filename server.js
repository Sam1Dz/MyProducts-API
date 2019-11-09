const express = require('express');
const bodyParser = require('body-parser');
const time = require('moment');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json());

const routers = require('./routers');
routers(app);

require('dotenv').config();

app.listen(process.env.PORT, () => console.log('Server started at PORT "' + process.env.PORT + '" [' + time().format('DD/MM/YYYY HH:mm:ss') + ' UTC+7]'));