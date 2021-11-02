'use strict';

const User = use('App/Models/User');

class UserController {
    async get({ response, request }) {
        const username = request.all()['👤'];
        const user = await User.findBy('username', username);
        return response.json({
            '👤': username,
            '✅': !!user,
            '💬': ''
        });
    }
}

module.exports = UserController;
