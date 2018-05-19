'use strict';

exports.competenciesCompIdSub_competenciesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
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

exports.competenciesCompIdSub_competenciesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompetency (SubCompetency)
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

exports.competenciesCompIdSub_competenciesSubCompIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.competenciesCompIdSub_competenciesSubCompIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
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

exports.competenciesCompIdSub_competenciesSubCompIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * subCompetency (SubCompetency)
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

