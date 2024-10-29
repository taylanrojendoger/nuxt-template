// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    // globalAppMiddleware: true,
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: 'http://localhost:3000/api/auth', //
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'google',
      addDefaultCallbackUrl: true
    }
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/ui', '@sidebase/nuxt-auth', 'nuxt-mongoose', '@nuxt/ui', '@pinia/nuxt', '@nuxt/icon'],
  mongoose: {
    uri: 'mongodb://localhost:27017/?directConnection=true&authSource=admin', //
    options: {},
    modelsDir: 'models',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    authSecret: '',
    authOrigin: '',
    clientId: '',
    clientSecret: '',
    public: {
      appName: '',
      appEmail: ''
    }
  }
})