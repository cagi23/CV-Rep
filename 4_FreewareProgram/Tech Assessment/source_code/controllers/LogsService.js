'use strict';

exports.logsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * query (String)
  * page (Integer)
  * pageSize (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "total" : "",
  "pageSize" : "",
  "page" : "",
  "items" : [ {
    "dateTime" : "aeiou",
    "objectName" : "aeiou",
    "operation" : "aeiou",
    "objectId" : "aeiou",
    "userEID" : "aeiou"
  } ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

