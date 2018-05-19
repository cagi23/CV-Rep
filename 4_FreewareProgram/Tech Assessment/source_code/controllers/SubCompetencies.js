'use strict';

var url = require('url');


var SubCompetencies = require('./SubCompetenciesService');


module.exports.competenciesCompIdSub_competenciesGET = function competenciesCompIdSub_competenciesGET (req, res, next) {
  SubCompetencies.competenciesCompIdSub_competenciesGET(req.swagger.params, res, next);
};

module.exports.competenciesCompIdSub_competenciesPOST = function competenciesCompIdSub_competenciesPOST (req, res, next) {
  SubCompetencies.competenciesCompIdSub_competenciesPOST(req.swagger.params, res, next);
};

module.exports.competenciesCompIdSub_competenciesSubCompIdDELETE = function competenciesCompIdSub_competenciesSubCompIdDELETE (req, res, next) {
  SubCompetencies.competenciesCompIdSub_competenciesSubCompIdDELETE(req.swagger.params, res, next);
};

module.exports.competenciesCompIdSub_competenciesSubCompIdGET = function competenciesCompIdSub_competenciesSubCompIdGET (req, res, next) {
  SubCompetencies.competenciesCompIdSub_competenciesSubCompIdGET(req.swagger.params, res, next);
};

module.exports.competenciesCompIdSub_competenciesSubCompIdPUT = function competenciesCompIdSub_competenciesSubCompIdPUT (req, res, next) {
  SubCompetencies.competenciesCompIdSub_competenciesSubCompIdPUT(req.swagger.params, res, next);
};
