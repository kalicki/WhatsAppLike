'use strict'

const shortid = require('shortid')

/**
 *
 * @param {string} colId collection ID
 * @param {string} docId document ID
 * @param {object} body properties to mutate
 * @return {Object} event
 */

const mut = ({ colId, docId, body, etag = undefined }) => ({
  mut: {
    'evt-id': shortid(),
    'col-id': colId,
    doc: {
      id: docId,
      etag,
      body,
    },
  },
})

module.exports = mut
