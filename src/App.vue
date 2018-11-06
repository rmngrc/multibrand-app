<template>
  <div id="app">
    <dynamic-component name="Header" />
    <h1>Multibrand app / {{brand}}</h1>
    <dynamic-component name="Box" />
    <branded-button type="primary">Hi there! This is a branded button</branded-button>
  </div>
</template>

<script>
import BrandedButton from '@/components/BrandedButton'
import DynamicComponent from '@/components/DynamicComponent'

export default {
  name: 'app',
  components: {
    BrandedButton,
    DynamicComponent
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
}

body {
  margin: 0;
}
</style>
