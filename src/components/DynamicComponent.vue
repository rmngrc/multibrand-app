<template>
  <component :is="component" v-if="component" :data="data"/>
</template>

<script>

export default {
  name: 'dynamic-component',
  props: ['data', 'name'],
  data () {
    return {
      component: null
    }
  },
  computed: {
    brand () {
      return process.env.VUE_APP_BRAND
    },
    loader () {
      // eslint-disable-next-line
      console.log(`${this.name} component loaded dynamically for ${this.brand}`)
      return () => import(`@/components/D${this.name}/${this.brand}`)
    }
  },
  mounted () {
    this.loader()
      .then(() => {
        this.component = () => this.loader()
      })
      .catch(() => {
        this.component = () => import(`@/components/D${this.name}/brand1`)
      })
  }
}
</script>
