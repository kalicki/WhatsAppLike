import React from 'react'
import Head from 'next/head'

const desc =
  'Build low-latency, real-time apps without having to maintain the infrastructure. Rapid keeps your real-time data highly queryable by supporting rich filtering, ordering and paging.'

  export default () => (
  <div>
    <Head>
      <title>Chat Demo App</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#1d1b2e"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Rapid Demo App" />
      <meta property="og:url" content="https://www.rapidrealtime.com" />
      <meta property="og:image" content="/static/banner.png" />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,600"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscaled;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
        text-rendering: optimizeLegibility;
        font-size: 62.5%;
        height: 100%;
      }
      body {
        font-family: 'Poppins', sans-serif;
        background: #fff;
        font-size: 1.4rem;
        color: #242a49;
        height: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
      }
    `}</style>
  </div>
)
