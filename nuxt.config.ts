import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  css:['@/assets/styles/index.scss'],
  styleResources:{
    sass: ['@/assets/styles/index.scss'],
  },
  build:{},
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/vars.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL || 'https://jsonplaceholder.typicode.com',
    },
  },
  modules: [
    '@pinia/nuxt',
  ]
})
