'use strict'

module.exports = {
  id: '/schema/deauth',
  title: 'Deauthorize',
  type: 'object',
  properties: {
    deauth: {
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
  required: ['deauth'],
  additionalProperties: false,
}
