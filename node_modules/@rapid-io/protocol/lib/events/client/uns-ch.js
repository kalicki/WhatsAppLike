'use strict'

const shortid = require('shortid')

/**
 * Create channel unsubscription event
 * @param {String} subId subscription id
 */
const unsCh = ({ subId }) => ({
  'uns-ch': {
    'evt-id': shortid(),
    'sub-id': subId,
  },
})

module.exports = unsCh
