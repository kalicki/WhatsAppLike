'use strict'

const shortid = require('shortid')

/**
 * Creates a connect protocol event
 * @param {String} conId connection id
 * @return {Object} event
 */

const con = ({ conId }) => ({
  con: {
    'evt-id': shortid(),
    'con-id': conId,
  },
})

module.exports = con
