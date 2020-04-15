<template lang="pug">
  div(id="parallax")
    div
</template>

<script>
  export default {
    name: 'parallax'
  }
</script>

<style lang="scss" scoped>
  @import 'src/styles/_variables.scss';

  #parallax {
    background: url('~/src/assets/edTech1.jpg') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    height: 400px;
  }
</style>