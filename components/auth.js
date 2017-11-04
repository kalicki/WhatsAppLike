import React, { Component } from 'react'

class Auth extends Component = ({onSubmitLogin, onSubmitRegister}) => {
  state = {
    value: '',
  }

  onInputChange = event => {
    this.setState({ value: event.target.value })
  }

  onSubmitLogin = onSubmitRegister = event => {
    event.preventDefault()
    const { value } = this.state

    this.props.onSubmit(value, () => {
      this.setState({
        value: ''
      })
    })
  }

  <div className="auth">
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={onSubmitLogin}>
        <input type="text" name="loginPhone" placeholder="Phone"/>
        <input type="password" name="loginPassword" placeholder="Password"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>

    <div className="register">
      <h2>Register</h2>
      <form onSubmit={onSubmitRegister}>
        <input type="text" name="registerName" placeholder="Name"/>
        <input type="text" name="registerPhone" placeholder="Phone"/>
        <input type="password" name="registerPassword" placeholder="Password"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>

    <style jsx>
      {`
        .auth {
          background-color: #f6f6f6;
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: 20;
        }
        .register, .login {
          width: 30%;
          margin: 0 auto;
          padding: 25px;
        }

        input[type="submit"] {
          font-size: 1.8rem;
          padding: 10px 15px;
          outline: none;
          border-radius: 0;
          -webkit-appearance: none;
          margin-top: 10px;
          width: 100%;
        }
        input[type="text"], input[type="password"] {
          font-family: 'Poppins', sans-serif;
          font-size: 1.8rem;
          border: 1px solid #EEEBF3;
          padding: 25px 30px;
          width: 100%;
          display: inline-block;
          outline: none;
          transition: border .2s ease;
          border-radius: 0;
          -webkit-appearance: none;
        }
      `}
    </style>
  </div>

export default Auth
