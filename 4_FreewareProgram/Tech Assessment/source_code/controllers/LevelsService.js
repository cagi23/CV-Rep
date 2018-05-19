'use strict';

exports.competenciesCompIdSub_competenciesSubCompIdLevelsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
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
    "level" : "",
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

exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * levelId (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * levelId (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "level" : "",
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

exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * levelId (Integer)
  * level (SubCompetencyLevel)
  **/
    var examples = {};
  examples['application/json'] = {
  "level" : "",
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

exports.competenciesCompIdSub_competenciesSubCompIdLevelsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * level (SubCompetencyLevel)
  **/
    var examples = {};
  examples['application/json'] = {
  "level" : "",
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

