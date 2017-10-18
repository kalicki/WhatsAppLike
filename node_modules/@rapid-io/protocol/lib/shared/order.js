'use strict'

module.exports = {
  id: '/shared/order',
  title: 'Order',
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: {
      type: 'string',
      enum: ['asc', 'desc'],
    },
  },
}
