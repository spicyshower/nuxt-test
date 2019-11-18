import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4136f3f3 = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _e970e5c6 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _b628e7b0 = () => interopDefault(import('../pages/users/register.vue' /* webpackChunkName: "pages/users/register" */))
const _fabf9a76 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _1218a7e4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test",
    component: _4136f3f3,
    name: "test"
  }, {
    path: "/users",
    component: _e970e5c6,
    name: "users"
  }, {
    path: "/users/register",
    component: _b628e7b0,
    name: "users-register"
  }, {
    path: "/users/:id",
    component: _fabf9a76,
    name: "users-id"
  }, {
    path: "/",
    component: _1218a7e4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
