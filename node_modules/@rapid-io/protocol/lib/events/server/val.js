'use strict'

const shortid = require('shortid')

/**
 * Creates value event
 * @param {String} colId collection id
 * @param {String} subId subscription id
 * @param {Array} docs documents to be sent
 */
const val = ({ colId, subId, docs }) => ({
  val: {
    'evt-id': shortid(),
    'col-id': colId,
    'sub-id': subId,
    docs,
  },
})

module.exports = val
