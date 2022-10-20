import Vue from 'vue'
import VueRouter from 'vue-router'
import FoodsView from '../views/FoodsView.vue'
import FavoritesView from '../views/FavoritesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: FoodsView
  },
  {
    path: '/favorites',
    name: 'favorites',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FavoritesView
  }
]

const router = new VueRouter({
  routes
})

export default router
