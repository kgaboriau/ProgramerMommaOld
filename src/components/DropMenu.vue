<template lang="pug">
  div(class="drop-menu")
    div(class="flex-container")
      div(v-for="item in items")
        menu-item(:menuItem="item")
</template>

<script>
import MenuItem from './MenuItem.vue'

  export default {
    name: 'drop-menu',
    components: {
      MenuItem
    },
    name: 'drop-menu',
    data() {
      return {
        items: [
          {title: 'testOne', link: 'test1'}, 
          {title: 'testTwo', link: 'test2'}, 
          {title: 'testThree', link: 'test3'}
        ]
      };
    },
  }
</script>

<style lang="scss" scoped>
  @import 'src/styles/_variables.scss';

  .flex-container {
    position: absolute;
    right: 1em;
    top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: $dark-accent-transparent;
    padding: $icon-size 0 0 0;
    transform: translateY(0);
  }
</style>