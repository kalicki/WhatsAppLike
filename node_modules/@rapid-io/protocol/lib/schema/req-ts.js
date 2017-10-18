'use strict'

module.exports = {
  id: '/schema/req-ts',
  title: 'Request timestamp',
  type: 'object',
  properties: {
    'req-ts': {
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
  required: ['req-ts'],
  additionalProperties: false,
}
