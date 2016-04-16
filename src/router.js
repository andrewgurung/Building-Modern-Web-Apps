import Router from 'ampersand-router'
import Public from './pages/public'
import Repos from './pages/repos'
import React from 'react'

export default Router.extend({
  routes: {
    // route path : handler string 'public'--> function 'public(){..}'
    // http://localhost:3000/ --> prints 'public page' on console
    '': 'public',
    'repos': 'repos'
  },

  public() {
    React.render(<Public/>, document.body)
  },

  repos() {
    React.render(<Repos/>, document.body)
  }
})
