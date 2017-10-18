'use strict'

module.exports = {
  id: '/schema/ca-da',
  title: 'DisconnectActionCancelled',
  type: 'object',
  properties: {
    'ca-da': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'act-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'act-id'],
      additionalProperties: false,
    },
  },
  required: ['ca-da'],
  additionalProperties: false,
}
