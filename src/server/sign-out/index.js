import { signOutController } from './controller.js'

export const signOut = {
  plugin: {
    name: 'signOut',
    register(server) {
      server.route({
        method: 'GET',
        path: '/sign-out',
        options: {
          auth: false
        },
        ...signOutController
      })
    }
  }
}
