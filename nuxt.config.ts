// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})