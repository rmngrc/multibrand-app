<template>
  <div id="app">
    <dynamic-component name="Header" />
    <h1>Multibrand app / {{brand}}</h1>

    <router-link to="/buttons" v-if="this.$route.name !== 'Buttons'">Show me the buttons</router-link>
    <router-link to="/boxes" v-if="this.$route.name !== 'Boxes'">Show me the boxes</router-link>

    <router-view/>

  </div>
</template>

<script>

import DynamicComponent from '@/components/DynamicComponent'

export default {
  name: 'app',
  components: {
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

a {
  margin: 20px;
}

body {
  margin: 0;
}
</style>
