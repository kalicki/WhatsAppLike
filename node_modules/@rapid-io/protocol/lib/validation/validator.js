'use strict'

const Ajv = require('ajv')

const filter = require('../shared/filter')
const order = require('../shared/order')
const limit = require('../shared/limit')
const skip = require('../shared/skip')

const query = require('../schema/query')
const ack = require('../schema/ack')
const err = require('../schema/err')
const nop = require('../schema/nop')
const con = require('../schema/con')
const rec = require('../schema/rec')
const dis = require('../schema/dis')
const auth = require('../schema/auth')
const deauth = require('../schema/deauth')
const mut = require('../schema/mut')
const mer = require('../schema/mer')
const del = require('../schema/del')
const da = require('../schema/da')
const daCa = require('../schema/da-ca')
const pub = require('../schema/pub')
const ftc = require('../schema/ftc')
const sub = require('../schema/sub')
const uns = require('../schema/uns')
const subCh = require('../schema/sub-ch')
const unsCh = require('../schema/uns-ch')
const res = require('../schema/res')
const val = require('../schema/val')
const upd = require('../schema/upd')
const rm = require('../schema/rm')
const ca = require('../schema/ca')
const caCh = require('../schema/ca-ch')
const caDa = require('../schema/ca-da')
const mes = require('../schema/mes')
const reqTs = require('../schema/req-ts')
const ts = require('../schema/ts')

const event = {
  id: '/event',
  title: 'Event',
  anyOf: [
    { $ref: ack.id },
    { $ref: err.id },
    { $ref: nop.id },
    { $ref: con.id },
    { $ref: rec.id },
    { $ref: dis.id },
    { $ref: auth.id },
    { $ref: deauth.id },
    { $ref: mut.id },
    { $ref: mer.id },
    { $ref: del.id },
    { $ref: da.id },
    { $ref: daCa.id },
    { $ref: pub.id },
    { $ref: ftc.id },
    { $ref: sub.id },
    { $ref: uns.id },
    { $ref: subCh.id },
    { $ref: unsCh.id },
    { $ref: res.id },
    { $ref: val.id },
    { $ref: upd.id },
    { $ref: rm.id },
    { $ref: ca.id },
    { $ref: caCh.id },
    { $ref: caDa.id },
    { $ref: mes.id },
    { $ref: reqTs.id },
    { $ref: ts.id },
  ],
}

const batch = {
  id: '/batch',
  title: 'Batch',
  type: 'object',
  properties: {
    batch: {
      type: 'array',
      minItems: 1,
      items: { $ref: event.id },
    },
  },
  required: ['batch'],
  additionalProperties: false,
}

const message = {
  id: '/message',
  title: 'Message',
  anyOf: [
    { $ref: event.id },
    { $ref: batch.id },
  ],
}

const validator = new Ajv({
  allErrors: true,
  schemas: [
    filter,
    order,
    limit,
    skip,
    query,
    event,
    ack,
    err,
    nop,
    con,
    rec,
    dis,
    auth,
    deauth,
    mut,
    mer,
    del,
    da,
    daCa,
    ftc,
    sub,
    uns,
    res,
    val,
    upd,
    rm,
    ca,
    caCh,
    caDa,
    batch,
    message,
    pub,
    mes,
    subCh,
    unsCh,
    reqTs,
    ts,
  ],
})

exports.message = validator.compile(message)
exports.filter = validator.compile(filter)
exports.query = validator.compile(query)
