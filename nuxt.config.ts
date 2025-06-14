// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vesp/nuxt-fontawesome",
    "@nuxt/image",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  googleFonts: {
    families: {
      Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Noto Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  fontawesome: {
    icons: {
      solid: [
        "location-dot",
        "dollar-sign",
        "cog",
        "circle",
        "check",
        "calendar",
      ],
      regular: ["user"],
    },
  },

  image: {
    dir: "assets/img",
  },
});
