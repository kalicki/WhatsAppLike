import React from 'react'

import Group from './group'

const GroupList = ({ groups, activeGroup, onClick }) =>
  <div>
    <h2>Groups</h2>
    <ul>
      {groups.map(Group =>
        <Group
          key={group.id}
          onClick={() => onClick(group.id)}
          name={group.id}
          lastMessage={group.body.lastMessage}
          active={group.id === activeGroup}
        />
      )}
    </ul>
    <style jsx>
      {`
        h2 {
          font-size: 2rem;
          font-weight: 600;
          margin: 32px 0 20px;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>

export default GroupList
