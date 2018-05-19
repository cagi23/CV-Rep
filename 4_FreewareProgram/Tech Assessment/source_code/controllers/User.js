'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.usersEIDDELETE = function usersEIDDELETE (req, res, next) {
  User.usersEIDDELETE(req.swagger.params, res, next);
};

module.exports.usersEIDGET = function usersEIDGET (req, res, next) {
  User.usersEIDGET(req.swagger.params, res, next);
};

module.exports.usersEIDPUT = function usersEIDPUT (req, res, next) {
  User.usersEIDPUT(req.swagger.params, res, next);
};

module.exports.usersGET = function usersGET (req, res, next) {
  User.usersGET(req.swagger.params, res, next);
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  User.usersPOST(req.swagger.params, res, next);
};
