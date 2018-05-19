'use strict';

var url = require('url');


var Authentication = require('./AuthenticationService');


module.exports.loginPOST = function loginPOST (req, res, next) {
  Authentication.loginPOST(req.swagger.params, res, next);
};
