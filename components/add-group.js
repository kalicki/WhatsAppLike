import React, { Component } from 'react'

class AddGroup extends Component {
  state = {
    isExpanded: false,
    value: '',
  }

  toggleExpand = () => this.setState({ isExpanded: !this.state.isExpanded })

  onInputChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { value } = this.state

    this.props.onSubmit(value, () => {
      this.setState({
        value: '',
        isExpanded: false,
      })
    })
  }

  render() {
    const { isExpanded, value } = this.state

    return (
      <div className="action-new-group">
        <button className="toggler" onClick={this.toggleExpand}>
          <span className={`symbol ${isExpanded && 'active'}`}>+</span> New Group
        </button>
        {isExpanded &&
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Type a group name..."
              name="name"
              value={value}
              onChange={this.onInputChange}
            />
            <button className="submit">Save</button>
          </form>}
        <style jsx>
          {`
            .action-new-group {
              margin: 0;
              padding: 10px 0 10px;
              display: inline-block;
              width: 50%;
              position: absolute;
              bottom: 15px;
              left: 0;
            }

            .toggler {
              position: relative;
              width: 100%;
              background: none;
              border: none;
              text-align: center;
              font-size: 1.6rem;
              font-weight: 400;
              color: #444;
              outline: none;
              cursor: pointer;
              transition: color .15s ease;
            }

            .toggler:hover {
              color: #cf4647;
            }

            .symbol {
              display: inline-block;
              font-size: 2rem;
              margin-right: 10px;
              transition: transform .15s ease;
            }

            .symbol.active {
              transform: rotate(45deg);
            }

            form {
              width: 100%;
            }

            input, .submit {
              font-family: 'Poppins', sans-serif;
              padding: 14px 14px;
            }

            input {
              border: 1px solid #eeebf3;
              border-radius: 4px;
              font-size: 1.6rem;
              display: block;
              width: 100%;
              -webkit-appearance: none;
            }

            .submit {
              width: 100%;
              background: transparent;
              border: 1px solid #cf4647;
              border-radius: 4px;
              color: #cf4647;
              font-size: 1.6rem;
              margin: 10px 0 20px;
              cursor: pointer;
              transition: .15s ease;
            }

            .submit:hover {
              background: #cf4647;
              color: #fff;
            }
          `}
        </style>
      </div>
    )
  }
}

export default AddGroup
