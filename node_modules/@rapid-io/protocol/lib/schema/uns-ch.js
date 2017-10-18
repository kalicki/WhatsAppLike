'use strict'

module.exports = {
  id: '/schema/uns-ch',
  title: 'UnsubscribeChannel',
  type: 'object',
  properties: {
    'uns-ch': {
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
  required: ['uns-ch'],
  additionalProperties: false,
}
