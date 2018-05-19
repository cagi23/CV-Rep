'use strict';

var url = require('url');


var CompletedActivities = require('./CompletedActivitiesService');


module.exports.employeesEIDActivitiesActivityIdDELETE = function employeesEIDActivitiesActivityIdDELETE (req, res, next) {
  CompletedActivities.employeesEIDActivitiesActivityIdDELETE(req.swagger.params, res, next);
};

module.exports.employeesEIDActivitiesGET = function employeesEIDActivitiesGET (req, res, next) {
  CompletedActivities.employeesEIDActivitiesGET(req.swagger.params, res, next);
};

module.exports.employeesEIDActivitiesPOST = function employeesEIDActivitiesPOST (req, res, next) {
  CompletedActivities.employeesEIDActivitiesPOST(req.swagger.params, res, next);
};
