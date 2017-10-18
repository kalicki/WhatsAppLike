'use strict'

const shortid = require('shortid')

/**
 * Create request server timestamp event
 */
const reqTs = () => ({
  'req-ts': {
    'evt-id': shortid(),
  },
})

module.exports = reqTs
