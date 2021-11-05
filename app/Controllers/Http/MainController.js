'use strict';

class MainController {
    async root({ response }) {
        return response.json({
            '✅': true
        });
    }
}

module.exports = MainController;
