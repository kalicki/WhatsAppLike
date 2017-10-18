'use strict'

module.exports = {
  id: '/schema/rm',
  title: 'Remove',
  type: 'object',
  properties: {
    rm: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
          },
          required: ['id'],
          additionalProperties: false,
        },
      },
      required: ['evt-id', 'col-id', 'sub-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['rm'],
  additionalProperties: false,
}
