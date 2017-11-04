import React, { Component } from 'react'

import Page from '../components/page'
import Header from '../components/header'
import Loader from '../components/loader'

// Login & Register
import Auth from '../components/auth'
import {createUser, loginUser} from '../lib/auth'

import Input from '../components/input'
import ListGroupsContacts from '../components/group-contact-list'
import ListMessage from '../components/message-list'

// Add Groups
import AddGroup from '../components/add-group'
import createGroup from '../lib/create-group'

import AddContact from '../components/add-contact'

import subscribeContactsGroups from '../lib/subscribe-groups'
import subscribeMessages from '../lib/subscribe-messages'
import sendMessage from '../lib/send-message'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      item: 'general',
      items: [],
      messages: [],
      text: '',
      isMenuOpen: false,
      isLoggedIn: false,
      regexName: /^[0-9a-zA-Z_-]+$/
    }
  }

  componentDidMount() {
    const { items } = this.state
    this.items = subscribeContactsGroups(
      items => this.setState({ items }),
      err => console.error('items subscribe error', err)
    )

    this.messages = subscribeMessages(
      items,
      messages => this.setState({ messages, loading: false }),
      err => console.error(err)
    )

    this.isLoggedIn = sessionStorage.getItem('isLoggedIn')
  }

  componentWillUnmount() {
    this.items && this.items.unsubscribe()
    this.messages && this.messages.unsubscribe()
  }

  loadChat = item => {
    this.setState({ item })

    this.state.isMenuOpen && this.toggleMobileMenu()

    if (this.messages) {
      this.messages.unsubscribe()
      this.setState({ loading: true })
    }

    this.messages = subscribeMessages(
      item,
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

  createGroup = (name, cb) => {
    if (!this.regexName.test(name) || name.length < 3) {
      alert('Invalid item name')
      return
    }

    createGroup(name, () => {
      cb()
      this.loadChat(name)
    })
  }

  // createUser
  createUser = (registerName, registerPhone, registerPassword, cb) => {
    if (!this.regexName.test(registerName) || registerName.length < 3) {
      alert('Invalid name')
      return
    }

    if (registerPhone.length < 8) {
      alert('Invalid phone number (minimum length 8 characters)')
      return
    }

    if (registerPassword.length < 6) {
      alert('Password minimum length 6 characters')
      return
    }

    createUser(registerName, registerPhone, registerPassword, () => {
      cb()
    })

  }

  // loginUser
  loginUser = (loginPhone, loginPassword, cb) => {
    if (loginPhone.length< 3 || loginPassword.length < 6) {
      alert('Invalid name or password')
      return
    }

    loginUser(loginPhone, loginPassword, (result) => {
      if (result !== true) {
        alert('Invalid name or password')
        return
      }

      cb()

      sessionStorage.setItem('isLoggedIn', !this.state.isLoggedIn)
      this.setState({ isLoggedIn: !this.state.isLoggedIn})
    })
  }

  async sendMessage() {
    const { item, text } = this.state

    try {
      await sendMessage(item, text)
      this.setState({ text: '' })
    } catch (err) {
      console.log('message not sent', err)
    }
  }

  toggleMobileMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen })

  render() {
    const {
      items,
      item,
      messages,
      text,
      loading,
      isLoggedIn,
      isMenuOpen,
    } = this.state

    return (
      <Page
        heading={`# ${item}`}
        onMenuClick={this.toggleMobileMenu}
        isMenuOpen={isMenuOpen}
      >

      {this.isLoggedIn !== true ?
        <Auth
          isLoggedIn={this.isLoggedIn}
          onSubmitLogin={this.loginUser}
          onSubmitRegister={this.createUser}
        />
      : null }

        <div>
          <aside className={`${isMenuOpen && 'open'}`}>
            <ListGroupsContacts
              list={items}
              active={item}
              onClick={this.loadChat}
            />
            <AddGroup onSubmit={this.createGroup} />
            <AddContact onSubmit={this.createContact} />
          </aside>
          <main>
            <ListMessage messages={messages} loading={loading} />
            <Input
              placeholder="Type a message..."
              onChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
              value={text}
              buttonSubmit="Send"
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
