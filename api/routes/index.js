const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')

module.exports = function ({UserRoutes}) {
    const router = express.Router();
    const apiRoute = express.Router();

    apiRoute
        .use(cors)
        .use(bodyParser.json())
        .use(compression);

    apiRoute.use([ "/users", UserRoutes]);

    router.use('/api', apiRoute);

    return router;


};
