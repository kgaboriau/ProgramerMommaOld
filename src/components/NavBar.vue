<template lang="pug">
  div(id="nav-bar")
    drop-menu(@mouseleave.native="hideMenu", @click.native="hideMenu", v-if="!menuHidden")
    nav-icon(@mouseover.native="showMenu", :menuOpen="!menuHidden")
</template>

<script>
  import DropMenu from './DropMenu.vue'
  import NavIcon from './NavIcon.vue'

  export default {
    name: 'nav-bar',
    components: {
      DropMenu,
      NavIcon
    },
    data() {
      return {
        menuHidden: true
      };
    },
    methods: {
      // Two methods to control visibility of drop down menu
      hideMenu() {
        this.menuHidden = true
      },
      showMenu() {
        this.menuHidden = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/styles/_variables.scss';

  #nav-bar {
    position: fixed; 
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 200;
    height: 100px;
  }
</style>