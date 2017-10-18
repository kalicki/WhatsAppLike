'use strict'

const shortid = require('shortid')

/**
 * Creates update event
 * @param {String} colId collection id
 * @param {String} subId subscription id
 * @param {Object} doc document
 */
const upd = ({ colId, subId, doc }) => ({
  upd: {
    'evt-id': shortid(),
    'col-id': colId,
    'sub-id': subId,
    doc,
  },
})

module.exports = upd
