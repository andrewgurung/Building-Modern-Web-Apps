import Router from './router'
import styles from './styles/main.styl'

window.app = {
  init() {
    // Create a router instance
    this.router = new Router()

    // No matter how many router you instantiate
    // there will be only one history object (Represents browser's history)
    // .start() will trigger it
    this.router.history.start()
  }
}

window.app.init()
