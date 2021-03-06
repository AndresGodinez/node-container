const express = require('express');

class Server {
    constructor({config, router}) {
        this.config = config;
        this.express = express();
        this.express.use(router);
    }

    start() {
        return new Promise((resolve, reject) => {
            const http = this.express.listen(this.config.PORT, () => {
                const {port} = http.address();
                console.log('Application listening on port: ' + port);
                resolve();
            })
        })
    }

}

module.exports = Server;