import app from 'ampersand-app'
import React from 'react'
import localLinks from 'local-links'

export default React.createClass({
  displayName: 'NavHelper',
  onClick (event) {
    // `getLocalPathname(..)` will return the pathname as a string
    const pathname = localLinks.getLocalPathname(event)

    // if the link is local, otherwise it will return null
    if(pathname) {
      // Eg: clicked anchors will prevent its default
      // behaviour (take the browser to a new URL)
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  },

  render () {
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
})
