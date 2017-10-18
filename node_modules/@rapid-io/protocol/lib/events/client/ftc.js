'use strict'

const shortid = require('shortid')

/**
 * Creates a fetch protocol event
 * @param {String} ftc fetch id
 * @param {String} colId collection id
 * @param {object=} query query object
 * @return {Object} event
 */

const ftc = ({ colId, ftcId, query: { filter, order, limit, skip } = {} }) => ({
  ftc: {
    'evt-id': shortid(),
    'ftc-id': ftcId,
    'col-id': colId,
    filter,
    order: order && [order],
    limit,
    skip,
  },
})

module.exports = ftc
