<template>
  <div id="app">
    <h1>Multibrand app / {{brand}}</h1>
    <branded-button type="primary">Hi there! This is a branded button</branded-button>
  </div>
</template>

<script>
import BrandedButton from './components/BrandedButton.vue'

export default {
  name: 'app',
  components: {
    BrandedButton
  },
  computed: {
    brand () {
      return process.env.VUE_APP_BRAND
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
