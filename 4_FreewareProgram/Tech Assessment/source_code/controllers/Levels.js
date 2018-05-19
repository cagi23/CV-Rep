'use strict';

var url = require('url');


var Levels = require('./LevelsService');


module.exports.competenciesCompIdSub_competenciesSubCompIdLevelsGET = function competenciesCompIdSub_competenciesSubCompIdLevelsGET (req, res, next) {
  Levels.competenciesCompIdSub_competenciesSubCompIdLevelsGET(req.swagger.params, res, next);
};

module.exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdDELETE = function competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdDELETE (req, res, next) {
  Levels.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdDELETE(req.swagger.params, res, next);
};

module.exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdGET = function competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdGET (req, res, next) {
  Levels.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdGET(req.swagger.params, res, next);
};

module.exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdPUT = function competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdPUT (req, res, next) {
  Levels.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdPUT(req.swagger.params, res, next);
};

module.exports.competenciesCompIdSub_competenciesSubCompIdLevelsPOST = function competenciesCompIdSub_competenciesSubCompIdLevelsPOST (req, res, next) {
  Levels.competenciesCompIdSub_competenciesSubCompIdLevelsPOST(req.swagger.params, res, next);
};
