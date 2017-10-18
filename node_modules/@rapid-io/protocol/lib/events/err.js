'use strict'

module.exports = ({ evtId, errType, errMessage }) => ({
  err: {
    'evt-id': evtId,
    'err-type': errType,
    'err-msg': errMessage,
  },
})
