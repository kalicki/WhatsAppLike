'use strict'

module.exports = {
  id: '/schema/nop',
  title: 'Acknowledge',
  type: 'object',
  properties: {
    nop: { type: 'null' },
  },
  required: ['nop'],
  additionalProperties: false,
}
