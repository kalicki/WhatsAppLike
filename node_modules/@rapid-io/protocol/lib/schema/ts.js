'use strict'

module.exports = {
  id: '/schema/ts',
  title: 'Timestamp',
  type: 'object',
  properties: {
    ts: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        timestamp: {
          type: 'number',
        },
      },
      required: ['evt-id', 'timestamp'],
      additionalProperties: false,
    },
  },
  required: ['ts'],
  additionalProperties: false,
}
