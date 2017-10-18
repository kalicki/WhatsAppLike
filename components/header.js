import React from 'react'
import NextLink from 'next/link'

export default ({ heading }) =>
  <header>
    <div className="link">
      <NextLink href="/">
        <a className="logo">WhatsApp Like</a>
      </NextLink>
    </div>
    <div className="heading">
      <h1>
        {heading}
      </h1>
    </div>
    <style jsx>
      {`
        header {
          height: 80px;
          display: flex;
          border-bottom: 1px solid #eeebf3;
        }
        .link {
          display: none;
        }

        @media screen and (min-width: 800px) {
          .link {
            flex: 1;
            max-width: 400px;
            border-right: 1px solid #eeebf3;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 80px;
            padding: 0 0 0 130px;
          }
        }
        a {
          font-size: 1.8rem;
          font-weight: 500;
          text-decoration: none;
          color: black;
        }
        .heading {
          flex: 2;
          display: flex;
          align-items: center;
        }
        h1 {
          margin: 0;
          font-size: 2.4rem;
          font-weight: 600;
          margin-left: 30px;
        }
        @media screen and (min-width: 800px) {
          h1 {
            margin-left: 60px;
          }
        }
      `}
    </style>
  </header>
