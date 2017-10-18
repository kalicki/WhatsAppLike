'use strict'

const shortid = require('shortid')

/**
 * Creates a subscription protocol event
 * @param {string} subId subscription id
 * @param {string} colId collection id
 * @param {object=} query query object
 * @return {Object} event
 */

const sub = ({ subId, colId, query: { filter, order, limit, skip } = {} }) => ({
  sub: {
    'evt-id': shortid(),
    'sub-id': subId,
    'col-id': colId,
    filter,
    order: order && [order], // we enforce Object, but server expects array
    limit,
    skip,
  },
})

module.exports = sub
