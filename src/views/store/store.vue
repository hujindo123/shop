<template>
  <div class="store_main">
    <v-header :title="decodeURI(this.$route.params.name)" :type="2" style="position: relative"></v-header>
    <v-nav></v-nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import nav from '@/components/nav/nav';
  export default {
    components: {
      'vHeader': header,
      'vNav': nav
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .store_main
    width 100%
    height 100%
    position relative
    overflow hidden
</style>
