'use strict'

module.exports = {
  id: '/schema/con',
  title: 'Connection',
  type: 'object',
  properties: {
    con: {
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
  required: ['con'],
  additionalProperties: false,
}
