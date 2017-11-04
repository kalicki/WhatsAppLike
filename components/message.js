import React from 'react'

import formatDate from '../utils/format-date'

const Message = ({ body }) =>
  <div>
    <div className="header">
      <span className="sender">{body.idEmisor}</span>
      <span className="date">{formatDate(body.sentDate)}</span>
    </div>
    <span className="text">{body.content}</span>
    <style jsx>
      {`
        div {
          padding: 10px 0;
        }
        .header {
          display: flex;
          align-items: baseline;
        }
        .text {
          display: block;
          word-break: break-all;
          white-space: pre-wrap;
        }
        .sender {
          font-weight: 600;
          margin-right: 15px;
        }
        .date {
          opacity: 0.7;
          font-size: 0.8em;
        }
      `}
    </style>
  </div>

export default Message
