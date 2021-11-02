'use strict';

const User = use('App/Models/User');

class UserController {
    async get({ response, request }) {
        const name = request.all()['👤'];
        return response.json({
            '👤': name,
            '✅': true,
            '💬': ''
        });
    }
}

module.exports = UserController;
