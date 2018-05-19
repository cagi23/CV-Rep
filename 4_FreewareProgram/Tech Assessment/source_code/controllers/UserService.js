'use strict';

exports.usersEIDDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eID (String)
  * hardDelete (Boolean)
  **/
  // no response value expected for this operation
  res.end();
}

exports.usersEIDGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eID (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "EID" : "aeiou",
  "password" : "aeiou",
  "role" : "aeiou",
  "directorEID" : "aeiou",
  "name" : "aeiou",
  "username" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersEIDPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eID (String)
  * user (User)
  **/
    var examples = {};
  examples['application/json'] = {
  "EID" : "aeiou",
  "password" : "aeiou",
  "role" : "aeiou",
  "directorEID" : "aeiou",
  "name" : "aeiou",
  "username" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersGET = function(args, res, next) {
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
    "EID" : "aeiou",
    "password" : "aeiou",
    "role" : "aeiou",
    "directorEID" : "aeiou",
    "name" : "aeiou",
    "username" : "aeiou"
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

exports.usersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user (User)
  **/
    var examples = {};
  examples['application/json'] = {
  "EID" : "aeiou",
  "password" : "aeiou",
  "role" : "aeiou",
  "directorEID" : "aeiou",
  "name" : "aeiou",
  "username" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

