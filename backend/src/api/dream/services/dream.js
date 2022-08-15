'use strict';

/**
 * dream service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dream.dream');
