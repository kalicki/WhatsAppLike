'use strict'

module.exports = {
  id: '/schema/sub-ch',
  title: 'SubscribeChannel',
  type: 'object',
  properties: {
    'sub-ch': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'chan-id': {
          anyOf: [
            {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            {
              type: 'object',
              properties: {
                pref: {
                  type: 'string',
                  pattern: '^[a-zA-Z0-9-_]+$',
                },
              },
              required: ['pref'],
              additionalProperties: false,
            },
          ],
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'chan-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['sub-ch'],
  additionalProperties: false,
}
