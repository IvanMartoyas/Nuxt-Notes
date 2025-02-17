import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/Home.vue').then(r => r.default || r)
    },
    {
      name: 'home',
      path: '/*',
      component: () => import('~/pages/NotFound.vue').then(r => r.default || r)
    },
  ],
}