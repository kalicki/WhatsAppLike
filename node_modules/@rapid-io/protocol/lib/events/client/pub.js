'use strict'

const shortid = require('shortid')

/**
 * Creates publish event
 * @param {(String|Object)} chanId channel id
 * @param {Object} body channel message
 */
const pub = ({ chanId, body }) => ({
  pub: {
    'evt-id': shortid(),
    'chan-id': chanId,
    body,
  },
})

module.exports = pub
