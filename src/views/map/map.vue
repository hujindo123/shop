<template>
  <div>
    <v-header :title="'附近商家'" :type="2"></v-header>
    <div class="map">暂未开放</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  export default {
    components: {
      'vHeader': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.map
  text-align center
  font-size 16px
  color rgb(170, 170, 170)
  line-height 180px
</style>
