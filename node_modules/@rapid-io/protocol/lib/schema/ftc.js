'use strict'

const filter = require('../shared/filter')
const order = require('../shared/order')
const limit = require('../shared/limit')
const skip = require('../shared/skip')

module.exports = {
  id: '/schema/ftc',
  title: 'Fetch',
  type: 'object',
  properties: {
    ftc: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'ftc-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        filter: { $ref: filter.id },
        order: { $ref: order.id },
        limit: { $ref: limit.id },
        skip: { $ref: skip.id },
      },
      required: ['evt-id', 'col-id', 'ftc-id'],
      additionalProperties: false,
    },
  },
  required: ['ftc'],
  additionalProperties: false,
}
