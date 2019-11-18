import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29cc43aa = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _1dc1e9e5 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _725e9a60 = () => interopDefault(import('../pages/users/register.vue' /* webpackChunkName: "pages/users/register" */))
const _efc9bce6 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _33aa3aac = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test",
    component: _29cc43aa,
    name: "test"
  }, {
    path: "/users",
    component: _1dc1e9e5,
    name: "users"
  }, {
    path: "/users/register",
    component: _725e9a60,
    name: "users-register"
  }, {
    path: "/users/:id",
    component: _efc9bce6,
    name: "users-id"
  }, {
    path: "/",
    component: _33aa3aac,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
