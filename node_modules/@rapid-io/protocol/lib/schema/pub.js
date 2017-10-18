'use strict'

module.exports = {
  id: '/schema/pub',
  title: 'Publish',
  type: 'object',
  properties: {
    pub: {
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
        body: {
          type: 'object',
        },
      },
      required: ['evt-id', 'chan-id', 'body'],
      additionalProperties: false,
    },
  },
  required: ['pub'],
  additionalProperties: false,
}
