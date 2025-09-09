import { homeController } from './controller.js'

export const home = {
  plugin: {
    name: 'home',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/',
          // options: {
          //   auth: false
          // },
          handler: homeController.handler // session guaranteed here
        }
      ])
    }
  }
}
