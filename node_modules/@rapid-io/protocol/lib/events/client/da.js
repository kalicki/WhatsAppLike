'use strict'

const shortid = require('shortid')

/**
 * Creates an on-disconnect action protocol event
 * @param {string} actId On-disconnect action id
 * @param {object=} action One of mutate, merge or delete
 * @return {Object} event
 */

const da = ({ actId, action }) => ({
  da: {
    'evt-id': shortid(),
    'act-id': actId,
    act: action,
  },
})

module.exports = da
