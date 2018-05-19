'use strict';

exports.employeesEIDActivitiesActivityIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eID (String)
  * activityId (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.employeesEIDActivitiesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eID (String)
  * query (String)
  * page (Integer)
  * pageSize (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : ""
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.employeesEIDActivitiesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eID (String)
  * activity (CompletedActivity)
  **/
  // no response value expected for this operation
  res.end();
}

