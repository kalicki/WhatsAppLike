import React, { Component } from 'react'

import Page from '../components/page'
import Header from '../components/header'
import Loader from '../components/loader'

import Input from '../components/input'
import groupList from '../components/group-list'
import MessageList from '../components/message-list'
import Addgroup from '../components/add-group'

import subscribegroups from '../lib/subscribe-groups'
import subscribeMessages from '../lib/subscribe-messages'
import sendMessage from '../lib/send-message'
import creategroup from '../lib/create-group'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      group: 'general',
      groups: [],
      messages: [],
      text: '',
      isMenuOpen: false,
    }
  }

  componentDidMount() {
    const { group } = this.state
    this.groups = subscribegroups(
      groups => this.setState({ groups }),
      err => console.error('groups subscribe error', err)
    )
    this.messages = subscribeMessages(
      group,
      messages => this.setState({ messages, loading: false }),
      err => console.error(err)
    )
  }

  componentWillUnmount() {
    this.groups && this.groups.unsubscribe()
    this.messages && this.messages.unsubscribe()
  }

  handlegroupClick = group => {
    this.setState({ group })

    this.state.isMenuOpen && this.toggleMobileMenu()

    if (this.messages) {
      this.messages.unsubscribe()
      this.setState({ loading: true })
    }

    this.messages = subscribeMessages(
      group,
      messages => this.setState({ messages, loading: false }),
      err => console.error(err)
    )
  }

  handleInputChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.state.text !== '') {
      this.sendMessage()
    }
  }

  creategroup = (name, cb) => {
    const regex = /^[0-9a-zA-Z_-]+$/

    if (!regex.test(name) || name.length < 3) {
      alert('Invalid group name')
      return
    }

    creategroup(name, () => {
      cb()
      this.handlegroupClick(name)
    })
  }

  async sendMessage() {
    const { group, text } = this.state

    try {
      await sendMessage(group, text)
      this.setState({ text: '' })
    } catch (err) {
      console.log('message not sent', err)
    }
  }

  toggleMobileMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen })

  render() {
    const {
      login,
      groups,
      group,
      messages,
      text,
      loading,
      isMenuOpen,
    } = this.state
    return (
      <Page
        heading={`# ${group}`}
        onMenuClick={this.toggleMobileMenu}
        isMenuOpen={isMenuOpen}
      >
        <div>
          <aside className={`${isMenuOpen && 'open'}`}>
            <groupList
              groups={groups}
              activegroup={group}
              onClick={this.handlegroupClick}
            />
            <Addgroup onSubmit={this.creategroup} />
          </aside>
          <main>
            <MessageList messages={messages} loading={loading} />
            <Input
              placeholder="Type a message..."
              onChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
              value={text}
            />
          </main>
        </div>
        <style jsx>
          {`
            div {
              display: flex;
              flex: 1;
            }

            aside {
              border-right: 1px solid #EEEBF3;
              padding: 0 0 0 50px;
              overflow: auto;
              -webkit-overflow-scrolling: touch;
              position: absolute;
              top: 0;
              bottom: 0;
              width: 100%;
              background: #fff;
              z-index: 10;
              transform: translate3d(-100%,0,0);
              transition: transform .4s ease;
            }

            aside.open {
              transform: translate3d(0,0,0);
            }

            @media screen and (min-width: 800px) {
              aside {
                position: relative;
                top: auto;
                bottom: auto;
                transform: none;
                flex: 1;
                max-width: 400px;
                padding: 0 0 0 130px;
              }
            }

            main {
              flex: 2;
              display flex;
              flex-direction: column;
              overflow: hidden;
            }
          `}
        </style>
      </Page>
    )
  }
}
