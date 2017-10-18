'use strict'

const shortid = require('shortid')

/**
 * Create channel subscription event
 * @param {(String|Object)} chanId channel id
 * @param {String} subId subscription id
 */
const subCh = ({ chanId, subId }) => ({
  'sub-ch': {
    'evt-id': shortid(),
    'chan-id': chanId,
    'sub-id': subId,
  },
})

module.exports = subCh
