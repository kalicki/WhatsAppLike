'use strict'

const shortid = require('shortid')

/**
 * Creates an cancel on-disconnect action protocol event
 * @param {string} actId action id
 * @return {Object} event
 */

const daCa = ({ actId }) => ({
  'da-ca': {
    'evt-id': shortid(),
    'act-id': actId,
  },
})

module.exports = daCa
