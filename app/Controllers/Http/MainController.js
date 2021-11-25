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
        const img = await fs.promises.readFile('./resources/favicon.ico')
        response.send(img.contents)
    }
}

module.exports = MainController;
