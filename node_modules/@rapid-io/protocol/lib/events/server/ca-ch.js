'use strict'

const shortid = require('shortid')

/**
 * Creates cancel-channel event
 * @param {String} subId subscription id
 */
const caCh = ({ subId }) => ({
  'ca-ch': {
    'evt-id': shortid(),
    'sub-id': subId,
  },
})

module.exports = caCh
