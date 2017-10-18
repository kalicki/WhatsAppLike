'use strict'

module.exports = {
  id: '/schema/uns',
  title: 'Unsubscribe',
  type: 'object',
  properties: {
    uns: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['uns'],
  additionalProperties: false,
}
