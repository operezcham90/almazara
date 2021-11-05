'use strict';

class MainController {
    async root({ view }) {
        const html = await view.render('root');
        return html;
    }
}

module.exports = MainController;
