<template lang="pug">
  div(id="app")
    drop-menu(@mouseleave.native="hideMenu", @click.native="hideMenu", v-if="!menuHidden")
    nav-icon(@mouseover.native="showMenu", :menuOpen="!menuHidden")
</template>

<script>
import DropMenu from './components/DropMenu.vue'
import NavIcon from './components/NavIcon.vue'

export default {
  components: {
    DropMenu,
    NavIcon
  },
  data() {
    return {
      menuHidden: true
    };
  },
  mounted() {
    // Remove standard spacing for background from user-agent-stylesheet
    document.body.style.margin = "0";
    document.body.style.padding = "0";
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
};
</script>

<style lang="scss" scoped>
  @import 'src/styles/_variables.scss';

  #app {
    font-size: 2em;
    text-align: center;
    color: $dark-shade;
    height: 100%;
    background-image: url('~/src/assets/background.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
