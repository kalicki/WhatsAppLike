'use strict'

module.exports = ({ evtId }) => ({
  ack: { 'evt-id': evtId },
})
