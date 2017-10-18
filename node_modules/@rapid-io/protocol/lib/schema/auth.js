'use strict'

module.exports = {
  id: '/schema/auth',
  title: 'Authorize',
  type: 'object',
  properties: {
    auth: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        token: { type: 'string' },
      },
      required: ['evt-id', 'token'],
      additionalProperties: false,
    },
  },
  required: ['auth'],
  additionalProperties: false,
}
