'use strict';

exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdActivitiesActivityIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * levelId (Integer)
  * activityId (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdActivitiesActivityIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * levelId (Integer)
  * activityId (Integer)
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

exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdActivitiesActivityIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * levelId (Integer)
  * activityId (Integer)
  * activity (Activity)
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

exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdActivitiesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * levelId (Integer)
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

exports.competenciesCompIdSub_competenciesSubCompIdLevelsLevelIdActivitiesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * compId (Integer)
  * subCompId (Integer)
  * levelId (Integer)
  * activity (Activity)
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

