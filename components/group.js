import React from 'react'

const GroupItem = ({ name, lastMessage, onClick, active }) =>
  <li>
    <button onClick={onClick} className={active && 'active'}>
      <span>
        <span className="dash">#</span>
        {name}
      </span>
      {lastMessage.text
        ? <span className="last-message">
            <i>Last message:</i> {lastMessage.text}
          </span>
        : <span className="last-message">
            <i>No messages yet</i>
          </span>}
    </button>
    <style jsx>
      {`
        li {
        }
        button {
          border: none;
          background: none;
          cursor: pointer;
          padding: 5px 0;
          position: relative;
          transition: color .1s ease;
          font-size: 1.8rem;
          font-weight: 600;
          width: 100%;
          text-align: left;
        }
        button:hover {
          color: #cf4647;
        }
        button.active {
          color: #cf4647;
        }
        .dash {
          margin-right: 15px;
        }
        .last-message {
          font-size: 1.2rem;
          margin-top: 4px;
          padding: 0 27px;
          color: #404040;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          display: -webkit-box;
          overflow: hidden;
        }
      `}
    </style>
  </li>

export default GroupItem
