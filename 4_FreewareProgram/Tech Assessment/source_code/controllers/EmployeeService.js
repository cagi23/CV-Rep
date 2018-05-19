'use strict';

exports.employeesEIDDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eID (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.employeesEIDGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eID (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "division" : "aeiou",
  "EID" : "aeiou",
  "country" : "aeiou",
  "expectedMaturity" : "aeiou",
  "subGroup" : "aeiou",
  "profile" : "aeiou",
  "name" : "aeiou",
  "managerEID" : "aeiou",
  "currentMaturity" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.employeesEIDPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eID (String)
  * user (Employee)
  **/
    var examples = {};
  examples['application/json'] = {
  "division" : "aeiou",
  "EID" : "aeiou",
  "country" : "aeiou",
  "expectedMaturity" : "aeiou",
  "subGroup" : "aeiou",
  "profile" : "aeiou",
  "name" : "aeiou",
  "managerEID" : "aeiou",
  "currentMaturity" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.employeesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * query (String)
  * page (Integer)
  * pageSize (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "total" : "",
  "pageSize" : "",
  "page" : "",
  "items" : [ {
    "division" : "aeiou",
    "EID" : "aeiou",
    "country" : "aeiou",
    "expectedMaturity" : "aeiou",
    "subGroup" : "aeiou",
    "profile" : "aeiou",
    "name" : "aeiou",
    "managerEID" : "aeiou",
    "currentMaturity" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.employeesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * employee (Employee)
  **/
    var examples = {};
  examples['application/json'] = {
  "division" : "aeiou",
  "EID" : "aeiou",
  "country" : "aeiou",
  "expectedMaturity" : "aeiou",
  "subGroup" : "aeiou",
  "profile" : "aeiou",
  "name" : "aeiou",
  "managerEID" : "aeiou",
  "currentMaturity" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

