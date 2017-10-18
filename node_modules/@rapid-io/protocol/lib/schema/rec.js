'use strict'

module.exports = {
  id: '/schema/rec',
  title: 'Reconnection',
  type: 'object',
  properties: {
    rec: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'con-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'con-id'],
      additionalProperties: false,
    },
  },
  required: ['rec'],
  additionalProperties: false,
}
