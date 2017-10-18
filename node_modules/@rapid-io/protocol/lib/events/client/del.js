'use strict'

const shortid = require('shortid')

/**
 * Creates a delete protocol event
 * @param {Object} del
 * @param {String} del.colId - collection id
 * @param {String} del.docId - documend id
 * @param {String=} del.etag - documend id
 * @return {Object} event
 */

const del = ({ colId, docId, etag = undefined }) => ({
  del: {
    'evt-id': shortid(),
    'col-id': colId,
    doc: {
      id: docId,
      etag,
    },
  },
})

module.exports = del
