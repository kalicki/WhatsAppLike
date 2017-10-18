'use strict'

module.exports = {
  id: '/schema/del',
  title: 'Delete',
  type: 'object',
  properties: {
    del: {
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
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            etag: {
              anyOf: [
                { type: 'null' },
                { type: 'string' },
              ],
            },
          },
          required: ['id'],
          additionalProperties: false,
        },
      },
      required: ['col-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['del'],
  additionalProperties: false,
}
