import React from 'react'
import GroupContact from './group-contact'

const ListGroupsContacts = ({ items, active, onClick }) =>
  <div>
    <ul>
      {console.log(items)
        /*items.map(item =>
        <GroupContact
          key={item.id}
          onClick={() => onClick(item.id)}
          name={item.id}
          lastMessage={item.body.lastMessage}
          active={item.id === active}
        />
      )*/}
    </ul>

    <style jsx>
      {`
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>

export default ListGroupsContacts
