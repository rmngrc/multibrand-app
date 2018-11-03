module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/${process.env.VUE_APP_BRAND}.scss";`
      }
    }
  }
}
