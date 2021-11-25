'use strict';

var fs = require('fs')

class MainController {
    async root({ response }) {
        return response.json({
            '✅': true
        });
    }
    async icon({ response }) {
        response.header('Content-Security-Policy', "img-src 'self'")
        const img = fs.createReadStream('./resources/favicon.ico')
        response.stream(img)
    }
}

module.exports = MainController;
