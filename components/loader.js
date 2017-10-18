import React from 'react'

export default () =>
  <div>
    <svg
      width="33px"
      height="33px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid">
      <rect x="0" y="0" width="100" height="100" fill="none" />
      <circle
        cx="50"
        cy="50"
        r="40"
        strokeDasharray="163.36281798666926 87.9645943005142"
        stroke="#242A49"
        fill="none"
        strokeWidth="8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;180 50 50;360 50 50;"
          keyTimes="0;0.5;1"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
    </svg>
    <style jsx>
      {`
        div {
          position: absolute;
          left: 0;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
