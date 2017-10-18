import React from 'react'

const Input = ({ placeholder, value, onChange, onSubmit, name, margin = 0 }) =>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      style={{ margin }}
    />
    <style jsx>
      {`
        input {
          font-family: 'Poppins', sans-serif;
          font-size: 1.8rem;
          border: 1px solid #EEEBF3;
          border-left: 0;
          border-bottom: 0;
          padding: 25px 30px;
          width: 100%;
          display: block;
          outline: none;
          transition: border .2s ease;
          border-radius: 0;
          -webkit-appearance: none;
        }
      `}
    </style>
  </form>

export default Input
