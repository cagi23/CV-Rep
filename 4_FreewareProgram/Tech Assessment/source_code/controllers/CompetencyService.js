'use strict';

exports.competenciesGET = function(args, res, next) {
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
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : ""
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

exports.competenciesIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.competenciesIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.competenciesIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * competency (Competency)
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

exports.competenciesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * competency (Competency)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

