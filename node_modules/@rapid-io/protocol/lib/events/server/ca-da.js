'use strict'

const shortid = require('shortid')

/**
 * Creates on-disconnect action cancelled event
 * @param {String} actId On-disconnect action id
 */
const caDa = ({ actId }) => ({
  'ca-da': {
    'evt-id': shortid(),
    'act-id': actId,
  },
})

module.exports = caDa
