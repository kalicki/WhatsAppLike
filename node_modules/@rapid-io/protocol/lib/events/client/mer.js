'use strict'

const shortid = require('shortid')

/**
 * Creates a merge protocol event
 * @param {String} colId collection id
 * @param {String} docId documend id
 * @param {Object} body properties to merge
 * @return {Object} event
 */

const mer = ({ colId, docId, body, etag = undefined }) => ({
  mer: {
    'evt-id': shortid(),
    'col-id': colId,
    doc: {
      id: docId,
      etag,
      body,
    },
  },
})

module.exports = mer
