<template>
  <div class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">

  import footer from '@/components/footer/footer';
  export default {
    components: {
      'v-footer': footer
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main
    position relative
    width 100%
    height 100%
</style>
