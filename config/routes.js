'use strict';

const MessagesList = require('../controllers/message_vc');

module.exports = function(app) {
   app.route('/rest/v1/messages')
       .get(MessagesList);
};