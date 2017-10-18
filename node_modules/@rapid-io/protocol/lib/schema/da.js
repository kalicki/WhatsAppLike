'use strict'

const merge = require('./mer')
const mutate = require('./mut')
const remove = require('./del')

module.exports = {
  id: '/schema/da',
  title: 'DisconnectAction',
  type: 'object',
  properties: {
    da: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'act-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        act: {
          anyOf: [
            { $ref: merge.id },
            { $ref: mutate.id },
            { $ref: remove.id },
          ],
        },
      },
      required: ['evt-id', 'act-id', 'act'],
      additionalProperties: false,
    },
  },
  required: ['da'],
  additionalProperties: false,
}
