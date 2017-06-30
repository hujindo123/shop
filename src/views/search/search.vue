<template>
  <div>
    <v-header :type="3"></v-header>
    <scroller class="search-list">
      <v-list :tj="true"></v-list>
    </scroller>

  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import list from '@/components/list/list';
  export default {
    data () {
      return {
        type: 2
      };
    },
    components: {
      'vHeader': header,
      'vList': list
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search-list
  padding-top 44px
</style>
