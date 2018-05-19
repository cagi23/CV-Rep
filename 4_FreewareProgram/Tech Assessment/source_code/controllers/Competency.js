'use strict';

var url = require('url');


var Competency = require('./CompetencyService');


module.exports.competenciesGET = function competenciesGET (req, res, next) {
  Competency.competenciesGET(req.swagger.params, res, next);
};

module.exports.competenciesIdDELETE = function competenciesIdDELETE (req, res, next) {
  Competency.competenciesIdDELETE(req.swagger.params, res, next);
};

module.exports.competenciesIdGET = function competenciesIdGET (req, res, next) {
  Competency.competenciesIdGET(req.swagger.params, res, next);
};

module.exports.competenciesIdPUT = function competenciesIdPUT (req, res, next) {
  Competency.competenciesIdPUT(req.swagger.params, res, next);
};

module.exports.competenciesPOST = function competenciesPOST (req, res, next) {
  Competency.competenciesPOST(req.swagger.params, res, next);
};
