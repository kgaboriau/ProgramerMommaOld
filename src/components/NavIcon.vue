<template lang="pug">
  div(id="nav-icon", :class="{ closeIcon: menuOpen }")
    div
</template>

<script>
  export default {
    name: 'nav-icon',
    props: {
      menuOpen: Boolean
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/styles/_variables.scss';

  #nav-icon {
    position: absolute;
    right: 0;
    margin: 1.1em;
    width: $icon-size;
  }

  #nav-icon:after, 
  #nav-icon:before, 
  #nav-icon div {
    background-color: $light-shade;
    border-radius: 3px;
    content: '';
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all .5s ease-in-out;
  }

  #nav-icon.closeIcon:before {
    transform: translateY(12px) rotate(135deg);
  }

  #nav-icon.closeIcon:after {
    transform: translateY(-12px) rotate(-135deg);
  }

  #nav-icon.closeIcon div {
    transform: scale(0);
  }
</style>