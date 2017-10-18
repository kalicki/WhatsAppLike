'use strict'

const filter = require('../shared/filter')
const order = require('../shared/order')
const limit = require('../shared/limit')
const skip = require('../shared/skip')

const schemaId = '/schema/query'

module.exports = {
  id: schemaId,
  title: 'Query',
  type: 'object',
  properties: {
    filter: { $ref: filter.id },
    order: { $ref: order.id },
    limit: { $ref: limit.id },
    skip: { $ref: skip.id },
  },
  additionalProperties: false,
}
