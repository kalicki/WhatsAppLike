'use strict'

module.exports = {
  id: '/schema/da-ca',
  title: 'CancelDisconnectAction',
  type: 'object',
  properties: {
    'da-ca': {
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
  required: ['da-ca'],
  additionalProperties: false,
}
