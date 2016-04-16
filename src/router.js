import Router from 'ampersand-router'

export default Router.extend({
  routes: {
    // route path : handler string 'public'--> function 'public(){..}'
    // http://localhost:3000/ --> prints 'public page' on console
    '': 'public',
    'repos': 'repos'
  },

  public() {
    console.log('public page')
  },

  repos() {
    console.log('repos')
  }
})
