'use strict'

const shortid = require('shortid')

/**
 * Creates message event
 * @param {Number} timestamp server timestamp
 */
const ts = ({ timestamp }) => ({
  ts: {
    'evt-id': shortid(),
    timestamp,
  },
})

module.exports = ts
