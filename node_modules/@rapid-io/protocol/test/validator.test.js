/* eslint-disable no-undef */
/* eslint-disable callback-return */

'use strict'

const ack = require('../lib/events/ack')
const err = require('../lib/events/err')
const clientEvents = require('../lib/events/client')
const serverEvents = require('../lib/events/server')
const validate = require('../lib/validation')

test('ack', () => {
  const message = ack({ evtId: 'fakeId' })
  expect(validate.message(message)).toBeTruthy()
})

test('ack - wrong id format', () => {
  const message = ack({ evtId: 'fak*eId' })
  expect(validate.message(message)).toBeFalsy()
})

test('ack - missing id', () => {
  const message = ack({})
  expect(validate.message(message)).toBeFalsy()
})

test('err', () => {
  const message = err({
    evtId: 'fakeId',
    errType: 'internal-error',
    errMessage: 'message',
  })
  expect(validate.message(message)).toBeTruthy()
})

test('err - wrong event id format', () => {
  const message = err({
    evtId: 'fakeId^',
    errType: 'internal-error',
    errMessage: 'message',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('err - unknown type', () => {
  const message = err({
    evtId: 'fakeId',
    errType: 'fake-error',
    errMessage: 'message',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('err - missing event id', () => {
  const message = err({
    errType: 'internal-error',
    errMessage: 'message',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('err - missing type', () => {
  const message = err({
    evtId: 'fakeId',
    errMessage: 'message',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('err - missing message', () => {
  const message = err({
    evtId: 'fakeId',
    errType: 'internal-error',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('auth', () => {
  const message = clientEvents.auth({ token: 'fakeToken' })
  expect(validate.message(message)).toBeTruthy()
})

test('auth - missing token', () => {
  const message = clientEvents.auth({ })
  expect(validate.message(message)).toBeFalsy()
})

test('con', () => {
  const message = clientEvents.con({ conId: 'fakeId' })
  expect(validate.message(message)).toBeTruthy()
})

test('con - wrong format', () => {
  const message = clientEvents.con({ conId: 'fakeId$' })
  expect(validate.message(message)).toBeFalsy()
})

test('con - missing id', () => {
  const message = clientEvents.con({ })
  expect(validate.message(message)).toBeFalsy()
})

test('da-ca', () => {
  const message = clientEvents.daCa({ actId: 'fakeId' })
  expect(validate.message(message)).toBeTruthy()
})

test('da-ca - wrong format', () => {
  const message = clientEvents.daCa({ actId: 'fakeId$' })
  expect(validate.message(message)).toBeFalsy()
})

test('da-ca - missing action id', () => {
  const message = clientEvents.daCa({})
  expect(validate.message(message)).toBeFalsy()
})

test('da - mutation', () => {
  const mut = clientEvents.mut({
    colId: 'fakeId',
    docId: 'fakeId',
    body: {},
  })
  const message = clientEvents.da({
    actId: 'fakeId',
    action: mut,
  })
  expect(validate.message(message)).toBeTruthy()
})

test('da - merge', () => {
  const mer = clientEvents.mer({
    colId: 'fakeId',
    docId: 'fakeId',
    body: {},
  })
  const message = clientEvents.da({
    actId: 'fakeId',
    action: mer,
  })
  expect(validate.message(message)).toBeTruthy()
})

test('da - delete', () => {
  const del = clientEvents.del({
    colId: 'fakeId',
    docId: 'fakeId',
  })
  const message = clientEvents.da({
    actId: 'fakeId',
    action: del,
  })
  expect(validate.message(message)).toBeTruthy()
})

test('da - unknown action', () => {
  const message = clientEvents.da({
    actId: 'fakeId',
    action: {
      fake: {
        'col-id': 'fakeId',
      },
    },
  })
  expect(validate.message(message)).toBeFalsy()
})

test('da - missing action', () => {
  const message = clientEvents.da({
    actId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('da - wrong action id format', () => {
  const del = clientEvents.del({
    colId: 'fakeId',
    docId: 'fakeId',
  })
  const message = clientEvents.da({
    actId: 'fakeId%',
    action: {
      del,
    },
  })
  expect(validate.message(message)).toBeFalsy()
})

test('da - missing action id', () => {
  const del = clientEvents.del({
    colId: 'fakeId',
    docId: 'fakeId',
  })
  const message = clientEvents.da({
    action: {
      del,
    },
  })
  expect(validate.message(message)).toBeFalsy()
})

test('deauth', () => {
  const message = clientEvents.deauth()
  expect(validate.message(message)).toBeTruthy()
})

test('del', () => {
  const message = clientEvents.del({
    colId: 'fakeId',
    docId: 'fakeId',
    etag: 'etag',
  })
  expect(validate.message(message)).toBeTruthy()
})

test('del - without etag', () => {
  const message = clientEvents.del({
    colId: 'fakeId',
    docId: 'fakeId',
  })
  expect(validate.message(message)).toBeTruthy()
})

test('del - wrong doc id format', () => {
  const message = clientEvents.del({
    colId: 'fakeId',
    docId: '#fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('del - wrong col id format', () => {
  const message = clientEvents.del({
    colId: 'fakeId&',
    docId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('del - missing doc id', () => {
  const message = clientEvents.del({
    colId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('del - missing col id', () => {
  const message = clientEvents.del({
    docId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('dis', () => {
  const message = clientEvents.dis()
  expect(validate.message(message)).toBeTruthy()
})

test('ftc - without query', () => {
  const message = clientEvents.ftc({
    colId: 'fakeId',
    ftcId: 'fakeId',
  })
  expect(validate.message(message)).toBeTruthy()
})

test('ftc - with query', () => {
  const message = clientEvents.ftc({
    colId: 'fakeId',
    ftcId: 'fakeId',
    query: {
      order: { attr: 'asc' },
      limit: 48,
      skip: 48,
      filter: { count: { gt: 6 } },
    },
  })
  expect(validate.message(message)).toBeTruthy()
})

test('ftc - wrong col id format', () => {
  const message = clientEvents.ftc({
    colId: 'fakeId)',
    ftcId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('ftc - wrong ftc id format', () => {
  const message = clientEvents.ftc({
    colId: 'fakeId',
    ftcId: 'fakeI(d',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('ftc - missing col id', () => {
  const message = clientEvents.ftc({
    ftcId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('ftc - missing ftc id', () => {
  const message = clientEvents.ftc({
    colId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mer', () => {
  const message = clientEvents.mer({
    colId: 'fakeId',
    docId: 'fakeId',
    body: {},
    etag: 'etag',
  })
  expect(validate.message(message)).toBeTruthy()
})

test('mer - without etag', () => {
  const message = clientEvents.mer({
    colId: 'fakeId',
    docId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeTruthy()
})

test('mer - invalid col id format', () => {
  const message = clientEvents.mer({
    colId: 'fakeId^',
    docId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mer - invalid doc id format', () => {
  const message = clientEvents.mer({
    colId: 'fakeId',
    docId: 'fakeId$',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mer - invalid body format', () => {
  const message = clientEvents.mer({
    colId: 'fakeId^',
    docId: 'fakeId',
    body: 6,
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mer - missing col id', () => {
  const message = clientEvents.mer({
    docId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mer - missing doc id', () => {
  const message = clientEvents.mer({
    colId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mer - missing body', () => {
  const message = clientEvents.mer({
    colId: 'fakeId^',
    docId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mut', () => {
  const message = clientEvents.mut({
    colId: 'fakeId',
    docId: 'fakeId',
    body: {},
    etag: 'etag',
  })
  expect(validate.message(message)).toBeTruthy()
})

test('mut - without etag', () => {
  const message = clientEvents.mut({
    colId: 'fakeId',
    docId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeTruthy()
})

test('mut - invalid col id format', () => {
  const message = clientEvents.mut({
    colId: 'fakeId^',
    docId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mut - invalid doc id format', () => {
  const message = clientEvents.mut({
    colId: 'fakeId',
    docId: 'fakeId$',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mut - invalid body format', () => {
  const message = clientEvents.mut({
    colId: 'fakeId^',
    docId: 'fakeId',
    body: 6,
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mut - missing col id', () => {
  const message = clientEvents.mut({
    docId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mut - missing doc id', () => {
  const message = clientEvents.mut({
    colId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mut - missing body', () => {
  const message = clientEvents.mut({
    colId: 'fakeId^',
    docId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('nop', () => {
  const message = clientEvents.nop()
  expect(validate.message(message)).toBeTruthy()
})

test('pub', () => {
  const message = clientEvents.pub({
    chanId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeTruthy()
})

test('pub - invalid chan id format', () => {
  const message = clientEvents.pub({
    chanId: 'fakeId$',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('pub - invalid body format', () => {
  const message = clientEvents.pub({
    chanId: 'fakeId',
    body: 'fake',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('pub - missing chan id', () => {
  const message = clientEvents.pub({
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('pub - missing body', () => {
  const message = clientEvents.pub({
    chanId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('rec', () => {
  const message = clientEvents.rec({ conId: 'fakeId' })
  expect(validate.message(message)).toBeTruthy()
})

test('rec - wrong id format', () => {
  const message = clientEvents.rec({ conId: 'fakeId@' })
  expect(validate.message(message)).toBeFalsy()
})

test('rec - missing id', () => {
  const message = clientEvents.rec({})
  expect(validate.message(message)).toBeFalsy()
})

test('req-ts', () => {
  const message = clientEvents.reqTs()
  expect(validate.message(message)).toBeTruthy()
})

test('subCh', () => {
  const message = clientEvents.subCh({
    chanId: 'fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeTruthy()
})

test('subCh - wrong chan id format', () => {
  const message = clientEvents.subCh({
    chanId: 'fakeId=',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('subCh - wrong sub id format', () => {
  const message = clientEvents.subCh({
    chanId: 'fakeId',
    subId: 'f!akeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('subCh - missing chan id', () => {
  const message = clientEvents.subCh({
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('subCh - missing sub id', () => {
  const message = clientEvents.subCh({
    chanId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('sub - without query', () => {
  const message = clientEvents.sub({
    colId: 'fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeTruthy()
})

test('sub', () => {
  const message = clientEvents.sub({
    colId: 'fakeId',
    subId: 'fakeId',
    query: {
      order: { attr: 'desc' },
      limit: 1,
      skip: 48,
      filter: { count: '5' },
    },
  })
  expect(validate.message(message)).toBeTruthy()
})

test('sub - wrong col id format', () => {
  const message = clientEvents.subCh({
    colId: 'fakeId=',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('sub - wrong sub id format', () => {
  const message = clientEvents.subCh({
    colId: 'fakeId',
    subId: 'f!akeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('sub - missing col id', () => {
  const message = clientEvents.subCh({
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('sub - missing sub id', () => {
  const message = clientEvents.subCh({
    colId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('unsCh', () => {
  const message = clientEvents.unsCh({ subId: 'fakeId' })
  expect(validate.message(message)).toBeTruthy()
})

test('unsCh - wrong id format', () => {
  const message = clientEvents.unsCh({ subId: 'fakeId@' })
  expect(validate.message(message)).toBeFalsy()
})

test('unsCh - missing id', () => {
  const message = clientEvents.unsCh({})
  expect(validate.message(message)).toBeFalsy()
})

test('uns', () => {
  const message = clientEvents.uns({ subId: 'fakeId' })
  expect(validate.message(message)).toBeTruthy()
})

test('uns - wrong id format', () => {
  const message = clientEvents.uns({ subId: 'fakeId@' })
  expect(validate.message(message)).toBeFalsy()
})

test('uns - missing id', () => {
  const message = clientEvents.uns({})
  expect(validate.message(message)).toBeFalsy()
})

test('caCh', () => {
  const message = serverEvents.caCh({ subId: 'fakeId' })
  expect(validate.message(message)).toBeTruthy()
})

test('caCh - wrong sub id format', () => {
  const message = serverEvents.caCh({ subId: 'fakeId[' })
  expect(validate.message(message)).toBeFalsy()
})

test('caCh - missing sub id', () => {
  const message = serverEvents.caCh({})
  expect(validate.message(message)).toBeFalsy()
})

test('caDa', () => {
  const message = serverEvents.caDa({ actId: 'fakeId' })
  expect(validate.message(message)).toBeTruthy()
})

test('caDa - wrong act id format', () => {
  const message = serverEvents.caDa({ actId: 'fakeId[' })
  expect(validate.message(message)).toBeFalsy()
})

test('caDa - missing act id', () => {
  const message = serverEvents.caDa({})
  expect(validate.message(message)).toBeFalsy()
})

test('ca', () => {
  const message = serverEvents.ca({ subId: 'fakeId' })
  expect(validate.message(message)).toBeTruthy()
})

test('ca - wrong sub id format', () => {
  const message = serverEvents.ca({ subId: 'fakeId[' })
  expect(validate.message(message)).toBeFalsy()
})

test('ca - missing sub id', () => {
  const message = serverEvents.ca({})
  expect(validate.message(message)).toBeFalsy()
})

test('mes', () => {
  const message = serverEvents.mes({
    chanId: 'fakeId',
    subId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeTruthy()
})

test('mes - invalid chan id format', () => {
  const message = serverEvents.mes({
    chanId: 'fakeId;',
    subId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mes - invalid sub id format', () => {
  const message = serverEvents.mes({
    chanId: 'fakeId',
    subId: 'fakeId\\',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mes - invalid body format', () => {
  const message = serverEvents.mes({
    chanId: 'fakeId',
    subId: 'fakeId',
    body: true,
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mes - missing chan id', () => {
  const message = serverEvents.mes({
    subId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mes - missing sub id', () => {
  const message = serverEvents.mes({
    chanId: 'fakeId',
    body: {},
  })
  expect(validate.message(message)).toBeFalsy()
})

test('mes - missing body', () => {
  const message = serverEvents.mes({
    chanId: 'fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('res', () => {
  const message = serverEvents.res({
    colId: 'fakeId',
    ftcId: 'fakeId',
    docs: [],
  })
  expect(validate.message(message)).toBeTruthy()
})

test('res - with document', () => {
  const message = serverEvents.res({
    colId: 'fakeId',
    ftcId: 'fakeId',
    docs: [{
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    }],
  })
  expect(validate.message(message)).toBeTruthy()
})

test('res - invalid col id format', () => {
  const message = serverEvents.res({
    colId: 'fakeI/d',
    ftcId: 'fakeId',
    docs: [],
  })
  expect(validate.message(message)).toBeFalsy()
})

test('res - invalid ftc id format', () => {
  const message = serverEvents.res({
    colId: 'fakeId',
    ftcId: 'fakeId.',
    docs: [],
  })
  expect(validate.message(message)).toBeFalsy()
})

test('res - invalid docs format', () => {
  const message = serverEvents.res({
    colId: 'fakeId',
    ftcId: 'fakeId',
    docs: 4,
  })
  expect(validate.message(message)).toBeFalsy()
})

test('res - missing col id', () => {
  const message = serverEvents.res({
    ftcId: 'fakeId',
    docs: [],
  })
  expect(validate.message(message)).toBeFalsy()
})

test('res - missing ftc id', () => {
  const message = serverEvents.res({
    colId: 'fakeId',
    docs: [],
  })
  expect(validate.message(message)).toBeFalsy()
})

test('res - missing docs', () => {
  const message = serverEvents.res({
    colId: 'fakeId',
    ftcId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('rm', () => {
  const message = serverEvents.rm({
    colId: 'fakeId',
    docId: 'fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeTruthy()
})

test('rm - wrong doc id format', () => {
  const message = serverEvents.rm({
    colId: 'fakeId',
    docId: '#fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('rm - wrong col id format', () => {
  const message = serverEvents.rm({
    colId: 'fakeId&',
    docId: 'fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('rm - wrong sub id format', () => {
  const message = serverEvents.rm({
    colId: 'fakeId',
    docId: 'fakeId',
    subId: 'fakeId?',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('rm - missing doc id', () => {
  const message = serverEvents.rm({
    colId: 'fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('rm - missing col id', () => {
  const message = serverEvents.rm({
    docId: 'fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('rm - missing sub id', () => {
  const message = serverEvents.rm({
    docId: 'fakeId',
    colId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('ts', () => {
  const message = serverEvents.ts({
    timestamp: 123456,
  })
  expect(validate.message(message)).toBeTruthy()
})

test('ts - wrong format', () => {
  const message = serverEvents.ts({
    timestamp: '123455',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('ts - missing timestamp', () => {
  const message = serverEvents.ts({})
  expect(validate.message(message)).toBeFalsy()
})

test('upd', () => {
  const message = serverEvents.upd({
    colId: 'fakeId',
    subId: 'fakeId',
    doc: {
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    },
  })
  expect(validate.message(message)).toBeTruthy()
})

test('upd - invalid col id', () => {
  const message = serverEvents.upd({
    colId: 'fakeId,',
    subId: 'fakeId',
    doc: {
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    },
  })
  expect(validate.message(message)).toBeFalsy()
})

test('upd - invalid sub id', () => {
  const message = serverEvents.upd({
    colId: 'fakeId',
    subId: 'fakeId<',
    doc: {
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    },
  })
  expect(validate.message(message)).toBeFalsy()
})

test('upd - invalid doc', () => {
  const message = serverEvents.upd({
    colId: 'fakeId',
    subId: 'fakeId',
    doc: {
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    },
  })
  expect(validate.message(message)).toBeFalsy()
})

test('upd - missing col id', () => {
  const message = serverEvents.upd({
    subId: 'fakeId',
    doc: {
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    },
  })
  expect(validate.message(message)).toBeFalsy()
})

test('upd - missing sub id', () => {
  const message = serverEvents.upd({
    colId: 'fakeId',
    doc: {
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    },
  })
  expect(validate.message(message)).toBeFalsy()
})

test('upd - missing doc', () => {
  const message = serverEvents.upd({
    colId: 'fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})

test('val', () => {
  const message = serverEvents.val({
    colId: 'fakeId',
    subId: 'fakeId',
    docs: [{
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    }],
  })
  expect(validate.message(message)).toBeTruthy()
})

test('val - invalid col id', () => {
  const message = serverEvents.val({
    colId: 'fakeId,',
    subId: 'fakeId',
    docs: [{
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    }],
  })
  expect(validate.message(message)).toBeFalsy()
})

test('val - invalid sub id', () => {
  const message = serverEvents.val({
    colId: 'fakeId',
    subId: 'fakeId<',
    docs: [{
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    }],
  })
  expect(validate.message(message)).toBeFalsy()
})

test('val - invalid docs', () => {
  const message = serverEvents.val({
    colId: 'fakeId',
    subId: 'fakeId',
    docs: [{
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    }],
  })
  expect(validate.message(message)).toBeFalsy()
})

test('val - missing col id', () => {
  const message = serverEvents.val({
    subId: 'fakeId',
    docs: [{
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    }],
  })
  expect(validate.message(message)).toBeFalsy()
})

test('val - missing sub id', () => {
  const message = serverEvents.val({
    colId: 'fakeId',
    docs: [{
      id: 'id',
      crt: 'ehehjd',
      'crt-ts': 123456,
      'mod-ts': 654321,
      etag: 'tag',
      body: {},
    }],
  })
  expect(validate.message(message)).toBeFalsy()
})

test('val - missing docs', () => {
  const message = serverEvents.val({
    colId: 'fakeId',
    subId: 'fakeId',
  })
  expect(validate.message(message)).toBeFalsy()
})
