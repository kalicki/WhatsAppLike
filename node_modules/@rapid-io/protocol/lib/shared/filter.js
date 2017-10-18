'use strict'

const schemaId = '/shared/filter'

const valPrimitive = {
  oneOf: [
    { type: 'string' },
    { type: 'number' },
    { type: 'boolean' },
  ],
}

const valPrimitiveFilter = {
  $ref: schemaId,
}

module.exports = {
  id: schemaId,
  title: 'Filter',
  type: 'object',
  properties: {
    not: valPrimitiveFilter,
    and: {
      type: 'array',
      items: valPrimitiveFilter,
      minItems: 1,
    },
    or: {
      type: 'array',
      items: valPrimitiveFilter,
      minItems: 1,
    },
  },
  additionalProperties: {
    oneOf: [
      { type: 'string' },
      { type: 'number' },
      { type: 'boolean' },
      { type: 'null' },
      {
        type: 'object',
        properties: {
          gt: valPrimitive,
          lt: valPrimitive,
          gte: valPrimitive,
          lte: valPrimitive,
          cnt: { type: 'string' },
          pref: { type: 'string' },
          suf: { type: 'string' },
          'arr-cnt': valPrimitive,
        },
        maxProperties: 1,
        minProperties: 1,
        additionalProperties: false,
      },
    ],
  },
  maxProperties: 1,
  minProperties: 1,
}
