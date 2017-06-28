<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./assets/css/main.styl"
  #app
    width 100%
    height 100%
</style>
