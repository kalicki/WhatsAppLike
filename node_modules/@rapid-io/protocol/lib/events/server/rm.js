'use strict'

const shortid = require('shortid')

/**
 * Creates remove event
 * @param {String} colId collection id
 * @param {String} subId subscription id
 * @param {id} id document id to be deleted
 */
const rm = ({ colId, subId, docId }) => ({
  rm: {
    'evt-id': shortid(),
    'col-id': colId,
    'sub-id': subId,
    doc: {
      id: docId,
    },
  },
})

module.exports = rm
