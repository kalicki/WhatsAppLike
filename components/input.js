import React from 'react'

const Input = ({ placeholder, value, onChange, onSubmit, name, margin = 0, buttonSubmit }) =>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      style={{ margin }}
    />

    <input type="submit" value={buttonSubmit}/>

    <style jsx>
      {`
        input[type="submit"] {
          font-size: 1.8rem;
          display: inline-block;
          width: 10%;
          padding: 25px 30px;
          outline: none;
          border-radius: 0;
          -webkit-appearance: none;
        }
        input[type="text"] {
          font-family: 'Poppins', sans-serif;
          font-size: 1.8rem;
          border: 1px solid #EEEBF3;
          border-left: 0;
          border-bottom: 0;
          padding: 25px 30px;
          width: 90%;
          display: inline-block;
          outline: none;
          transition: border .2s ease;
          border-radius: 0;
          -webkit-appearance: none;
        }
      `}
    </style>
  </form>

export default Input
