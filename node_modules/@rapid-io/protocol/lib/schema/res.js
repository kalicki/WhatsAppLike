'use strict'

module.exports = {
  id: '/schema/res',
  title: 'Results',
  type: 'object',
  properties: {
    res: {
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
        'ftc-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        docs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                pattern: '^[a-zA-Z0-9-_]+$',
              },
              crt: { type: 'string' },
              'crt-ts': { type: 'integer' },
              'mod-ts': { type: 'integer' },
              etag: { type: 'string' },
              body: { type: 'object' },
            },
            required: ['id', 'crt', 'crt-ts', 'mod-ts', 'etag', 'body'],
            additionalProperties: false,
          },
        },
      },
      required: ['evt-id', 'col-id', 'ftc-id', 'docs'],
      additionalProperties: false,
    },
  },
  required: ['res'],
  additionalProperties: false,
}
