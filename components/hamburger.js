import React from 'react'

const Hamburger = ({ onClick, isActive }) =>
  <button onClick={onClick}>
    <span className={`${isActive && 'active'}`}>Toggle Menu</span>

    <style jsx>{`
      button {
        display: block;
        position: absolute;
        z-index: 20;
        top: 10px;
        right: 10px;
        overflow: hidden;
        margin: 0;
        padding: 0;
        width: 60px;
        height: 60px;
        font-size: 0;
        text-indent: -9999px;
        appearance: none;
        box-shadow: none;
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
      }

      @media screen and (min-width: 800px) {
        button {
          display: none;
        }
      }

      span {
        display: block;
        position: absolute;
        top: 29px;
        left: 18px;
        right: 18px;
        height: 2px;
        background: #444;
        transition: background 0.3s;
      }

      span.active {
        background: transparent;
      }

      span::before,
      span::after {
        position: absolute;
        display: block;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #444;
        content: '';
        transition-duration: 0.3s, 0.3s;
      }

      span::before {
        top: -8px;
        transition-property: top, transform;
      }

      span.active::before {
        top: 0;
        transform: rotate(45deg);
      }

      span::after {
        bottom: -8px;
        transition-property: bottom, transform;
      }

      span.active::after {
        bottom: 0;
        transform: rotate(-45deg);
      }
    `}</style>
  </button>

export default Hamburger
