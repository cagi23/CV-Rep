'use strict';

exports.statisticsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "completedLevels" : [ "" ],
  "completedCompetencies" : [ {
    "name" : "aeiou",
    "count" : "",
    "description" : "aeiou",
    "id" : ""
  } ],
  "completedSubCompetencies" : [ "" ],
  "completedActivities" : [ "" ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

