'use strict'

module.exports = {
  id: '/schema/ack',
  title: 'Acknowledge',
  type: 'object',
  properties: {
    ack: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id'],
      additionalProperties: false,
    },
  },
  required: ['ack'],
  additionalProperties: false,
}
