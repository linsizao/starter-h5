import { createRouter, createWebHistory } from 'vue-router'
// import { routes } from 'virtual:generated-pages'
import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes
  // extendRoutes: (routes) => setupLayouts(routes)
  routes: setupLayouts(routes)
})
