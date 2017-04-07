/* eslint-disable global-require, import/no-webpack-loader-syntax */
import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string,
    }
  },
  render () {
    const head = Helmet.rewind()

    let css
    let script
    if (process.env.NODE_ENV === 'production') {
      css = <link rel="stylesheet" href={prefixLink('/styles.css')} />
      script = [
        <script src={prefixLink('/bootstrap-native.min.js')} />,
        <script src={prefixLink('/headroom.min.js')} />,
        <script dangerouslySetInnerHTML={{ __html: `window.linkPrefix="${prefixLink('')}"` }} />,
        <script src={prefixLink('/static.js')} />,
      ]
    } else {
      script = [
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />,
      ]
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href={prefixLink('/favicon.ico')} />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {script}
        </body>
      </html>
    )
  },
})
