import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@nuxtjs/color-mode",
    "@primevue/nuxt-module",
    "@nuxt/icon",
  ],
  colorMode: {
    preference: "dark",
    classSuffix: "",
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".dark",
        },
      },
    },
  },
  css: ["primeicons/primeicons.css"],
});