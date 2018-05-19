'use strict';

/*
 * Copyright (c) 2017 Topcoder, Inc. All rights reserved.
 */

/**
 * Contains all routes.
 */

const constants = require('../../constants');

const jwtAuth = constants.Passports.jwt;

module.exports = {
  '/test': {
    get: {
      auth: jwtAuth,
      access: ['admin'],
      controller: 'DemoController',
      method: 'reset'
    }
  }
};
