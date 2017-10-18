'use strict'

const shortid = require('shortid')

/**
 * Creates an deauthorization protocol event
 * @return {Object} event
 */

const deauth = () => ({
  deauth: {
    'evt-id': shortid(),
  },
})

module.exports = deauth
