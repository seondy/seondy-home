// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
