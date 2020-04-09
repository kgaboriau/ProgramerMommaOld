<template lang="pug">
  div(class="menu-item")
    p {{menuItem.title}}
</template>

<script>
  export default {
    name: 'menu-item',
    props: {
      menuItem: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/styles/_variables.scss';

  p {
    color: $light-shade;
    margin: 0.2em;
    padding: 0.2em;
  }
</style>