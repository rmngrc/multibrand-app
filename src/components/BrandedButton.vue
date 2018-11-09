<template>
  <button type="button" class="Button" :class="`Button--${type}`">
    <slot>Default button text</slot>
  </button>
</template>

<script>
export default {
  name: 'BrandedButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return ['primary', 'secondary'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Button {
  background-color: $button-bg-color;
  color: $button-text-color;
  font-size: 1rem;
  padding: 1rem 2rem;
}
</style>
