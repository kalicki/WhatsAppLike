'use strict'

const shortid = require('shortid')

/**
 * Creates an autharization protocol event
 * @param {string} token authorization token
 * @return {Object} event
 */

const auth = ({ token }) => ({
  auth: {
    'evt-id': shortid(),
    token,
  },
})

module.exports = auth
