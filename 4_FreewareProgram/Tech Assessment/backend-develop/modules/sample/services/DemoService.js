'use strict';

/*
 * Copyright (c) 2017 Topcoder, Inc. All rights reserved.
 */

/**
 * This service will provide reset database operation.
 */
const logger = require('../../../common/logger');

/**
 * test
 * @param  {} - te
 */
function* test() {
  return yield new Promise(resolve => resolve({}));
}

test.schema = {

};

module.exports = {
  test
};

logger.buildService(module.exports);
