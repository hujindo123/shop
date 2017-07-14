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
  @import "../static/reset.css"
  #app
    width 100%
    height 100%
</style>
