'use strict'

const shortid = require('shortid')

/**
 * Creates a reconnect protocol event
 * @param {string} conId connection id
 * @return {Object} event
 */

const rec = ({ conId }) => ({
  rec: {
    'evt-id': shortid(),
    'con-id': conId,
  },
})

module.exports = rec
