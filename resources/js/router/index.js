import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
import Register from '../components/auth/Register'

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresVisitor: true,
            }
          },
          {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                requiresVisitor: true,
            }
          },
          {
            path: '/logout',
            name: 'logout',
            component: Logout
          }
    ]
}