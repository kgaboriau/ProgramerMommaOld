<template lang="pug">
  div(id="app")
    nav-bar
    parallax
    p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<script>
import NavBar from './components/NavBar.vue'
import Parallax from './components/Parallax.vue'

export default {
  components: {
    NavBar,
    Parallax
  },
  mounted() {
    // Remove standard spacing for background from user-agent-stylesheet
    document.body.style.margin = "0";
    document.body.style.padding = "0";
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
    background: $light-shade;
  }
</style>
