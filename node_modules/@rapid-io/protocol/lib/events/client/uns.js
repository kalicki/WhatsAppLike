'use strict'

const shortid = require('shortid')

/**
 * Creates an unsubscribe protocl event
 * @param {string} subId subscription id
 * @return {Object} event
 */

const uns = ({ subId }) => ({
  uns: {
    'evt-id': shortid(),
    'sub-id': subId,
  },
})

module.exports = uns
