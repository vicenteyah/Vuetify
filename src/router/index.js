import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'
import User from '../views/BoardUser.vue'
import Pizza from '../views/Pizza.vue'
import Additional from '../views/Additional.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Login',
    component: Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/profile',
    name: 'profile',
    component: Profile
  },
  {
    path:'/user',
    name:'user',
    component: User
  },
  {
    path: '/pizza',
    name: 'Pizza',
    component: Pizza
  },
  {
    path: '/additional',
    name: 'Additional',
    component: Additional
  },
  {
    path:'/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../components/Cart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
