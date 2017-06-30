<template>
  <div>
    <v-header :title=" this.$route.query.name" :type="2"></v-header>
    <scroller class="type-list">
      <v-list></v-list>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import list from '@/components/list/list';
  export default {
    components: {
      'vHeader': header,
      'vList': list
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .type-list
    padding-top 44px
</style>
