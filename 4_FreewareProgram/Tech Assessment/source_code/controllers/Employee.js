'use strict';

var url = require('url');


var Employee = require('./EmployeeService');


module.exports.employeesEIDDELETE = function employeesEIDDELETE (req, res, next) {
  Employee.employeesEIDDELETE(req.swagger.params, res, next);
};

module.exports.employeesEIDGET = function employeesEIDGET (req, res, next) {
  Employee.employeesEIDGET(req.swagger.params, res, next);
};

module.exports.employeesEIDPUT = function employeesEIDPUT (req, res, next) {
  Employee.employeesEIDPUT(req.swagger.params, res, next);
};

module.exports.employeesGET = function employeesGET (req, res, next) {
  Employee.employeesGET(req.swagger.params, res, next);
};

module.exports.employeesPOST = function employeesPOST (req, res, next) {
  Employee.employeesPOST(req.swagger.params, res, next);
};
