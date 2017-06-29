<template>
  <div class="store_main">
    <v-header :title="title" :type="2" style="position: absolute"></v-header>
    <v-nav></v-nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import nav from '@/components/nav/nav';
  export default {
    data () {
      return {
        title: '精品超市'
      };
    },
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

</style>
