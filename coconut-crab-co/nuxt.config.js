module.exports = {
  //spaで動かす
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s | やしがにカンパニー",
    title: "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: [
    "@nuxtjs/axios",
    [
      "nuxt-buefy",
      {
        css: ["~/assets/css/buefy.scss"]
      }
    ],
    ["@nuxtjs/google-analytics", { id: "UA-140579929-2" }]
  ],
  axios: {
    proxy: true
  },
  proxy: {
    "/api": "https://firebasestorage.googleapis.com"
  },
  plugins: [
    "~/plugins/vue-youtube.js",
    "~/plugins/axios.js",
    "~plugins/particles.js"
  ],
  css: ["~assets/css/styles.scss"]
};
