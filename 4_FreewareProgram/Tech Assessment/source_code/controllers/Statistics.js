'use strict';

var url = require('url');


var Statistics = require('./StatisticsService');


module.exports.statisticsGET = function statisticsGET (req, res, next) {
  Statistics.statisticsGET(req.swagger.params, res, next);
};
