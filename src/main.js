import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import All from './components/All'
import Blog from './components/Blog'
import Favorites from './components/Favorites'
import Uncategorized from './components/Uncategorized'
import Organize from './components/Organize'
import Discover from './components/Discover'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  hashbang: false,
  history: true
})

router
  .map({
    '/': {
      component: All
    },
    '/all': {
      component: All
    },
    '/blog': {
      component: Blog
    },
    '/favorites': {
      component: Favorites
    },
    '/uncategorized': {
      component: Uncategorized
    },
    '/organize': {
      component: Organize
    },
    '/discover': {
      component: Discover
    }
  })
  .beforeEach(function () {
    window.scrollTo(0, 0)
  })
  .start(App, 'app')

// new Vue({
//   router,
//   el: 'body',
//   components: {
//     App
//   }
// })
