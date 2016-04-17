import Router from './router'
import styles from './styles/main.styl'
import app from 'ampersand-app'

window.app = app

app.extend({
  init() {
    // Create a router instance
    this.router = new Router()

    // No matter how many router you instantiate
    // there will be only one history object (Represents browser's history)
    // .start() will trigger it
    this.router.history.start()
  }
})

app.init()
