import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'

export default Router.extend({
  routes: {
    // route path : handler string 'public'--> function 'public(){..}'
    // http://localhost:3000/ --> prints 'public page' on console
    '': 'public',
    'repos': 'repos'
  },

  public() {
    React.render(<PublicPage/>, document.body)
  },

  repos() {
    React.render(<ReposPage/>, document.body)
  }
})
