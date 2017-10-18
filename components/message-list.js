import React, { Component } from 'react'

import Loader from './loader'
import Message from './message'

export default class MessageList extends Component {
  componentDidUpdate() {
    if (this.view) {
      this.view.scrollTop = this.view.scrollHeight
    }
  }

  renderMessages() {
    const { messages, loading } = this.props

    if (loading) {
      return <Loader />
    }

    if (!messages.length) {
      return (
        <span>
          No messages yet{' '}
          <style jsx>
            {`
              span {
                display: block;
                padding: 35px 0;
              }
            `}
          </style>
        </span>
      )
    }

    return messages.map(message => <Message key={message.id} {...message} />)
  }

  render() {
    const { messages, loading } = this.props
    return (
      <div ref={ref => (this.view = ref)}>
        {this.renderMessages()}
        <style jsx>
          {`
            div {
              flex: 1;
              padding: 20px 30px;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              position: relative;
            }

            @media screen and (min-width: 800px) {
              div {
                padding: 20px 60px;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
