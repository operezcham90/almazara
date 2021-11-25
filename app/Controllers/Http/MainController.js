'use strict';

var fs = require('fs')

class MainController {
    async root({ response }) {
        return response.json({
            '✅': true
        });
    }
}

module.exports = MainController;
