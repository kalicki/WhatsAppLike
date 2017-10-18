'use strict'

module.exports = {
  id: '/schema/mes',
  title: 'MessageChannel',
  type: 'object',
  properties: {
    mes: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'chan-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        body: {
          type: 'object',
        },
      },
      required: ['evt-id', 'chan-id', 'sub-id', 'body'],
      additionalProperties: false,
    },
  },
  required: ['mes'],
  additionalProperties: false,
}
