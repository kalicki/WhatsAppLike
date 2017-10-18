'use strict'

const shortid = require('shortid')

/**
 * Creates cancel event
 * @param {String} subId subscription id
 */
const ca = ({ subId }) => ({
  ca: {
    'evt-id': shortid(),
    'sub-id': subId,
  },
})

module.exports = ca
