'use strict'

const shortid = require('shortid')

/**
 * Create results event
 * @param {String} colId collection id
 * @param {String} ftcId fetch id
 * @param {Array} docs documents to be sent
 */
const res = ({ colId, ftcId, docs }) => ({
  res: {
    'evt-id': shortid(),
    'col-id': colId,
    'ftc-id': ftcId,
    docs,
  },
})

module.exports = res
