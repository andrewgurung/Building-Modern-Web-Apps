import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'
import Navigation from './components/nav-helper'

export default Router.extend({
  renderPage(page, opts = {layout: true}) {
    if(opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    React.render(page, document.body)
  },

  routes: {
    // route path : handler string 'public'--> function 'public(){..}'
    // http://localhost:3000/ --> prints 'public page' on console
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'auth/callback?:query': 'authCallback'
  },

  public() {
    this.renderPage(<PublicPage/>, {layout: false})
  },

  repos() {
    this.renderPage(<ReposPage/>)
  },

  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '8eba3eeeac52abf68302',
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user,repo'
    });
  },

  authCallback(query) {
    query = qs.parse(query);
    console.log( query );
  }
})
