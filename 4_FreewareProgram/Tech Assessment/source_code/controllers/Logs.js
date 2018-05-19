'use strict';

var url = require('url');


var Logs = require('./LogsService');


module.exports.logsGET = function logsGET (req, res, next) {
  Logs.logsGET(req.swagger.params, res, next);
};
